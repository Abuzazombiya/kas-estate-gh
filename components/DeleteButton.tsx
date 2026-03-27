'use client';

import { Trash2 } from "lucide-react";
import { deleteProperty } from "@/lib/actions";

export default function DeleteButton({ id }: { id: number }) {
    return (
        <button onClick={async () => {
            if (confirm('Are you sure you want to delete this property? This cannot be undone.')) {
                await deleteProperty(id);
            }
        }} className="text-slate-400 hover:text-red-600 cursor-pointer active:scale-90">
            <Trash2 size={18} />
        </button>
    );
}