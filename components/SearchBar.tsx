"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect, useMemo } from "react";
import debounce from "debounce";


export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search")?.toString() || "");

    useEffect(() => {
        setSearchTerm(searchParams.get("search")?.toString() || "");
    }, [searchParams]);

    const debouncedUpdateURL = useMemo(() => debounce((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }

        startTransition(() => {
            router.push(`/?${params.toString()}`);
        });
    }, 300), [router, searchParams]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedUpdateURL(value);
    }

    return (
        <div className="relative w-max-xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <Search size={20} />
            </div>
            <input 
                type="text"
                placeholder="Search by location (e.g Accra, Kumasi...."
                value={searchTerm}
                onChange={handleChange}
                className="w-full py-4 pl-12 pr-4 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:border-blue-600 transition-all text-slate-900"
            />
            {isPending && (
                <div className="absolute right-4 top-4 text-xs text-blue-500 animate-pulse">Searching....</div>
            )}
        </div>
    );
}