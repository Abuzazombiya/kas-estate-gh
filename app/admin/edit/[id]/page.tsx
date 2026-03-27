import { sql } from "@/lib/db";
import {notFound, redirect} from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function EditProperty({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    const rows = await sql`SELECT * FROM properties WHERE id = ${id}`;
    const house = rows[0];

    if (!house) return notFound();

    async function updateProperty(formData: FormData) {
        'use server';

        const title = formData.get('title');
        const price = formData.get('price');
        const location = formData.get('location');

        await sql`
        UPDATE properties
        SET title = ${title as string},
            price = ${price as string},
            location = ${location as string}
        WHERE id = ${id}
        `;
    
        revalidatePath('/admin');
        revalidatePath('/');
        redirect('/admin');
    }

    return (
        <main className="max-w-2xl mx-auto py-20 px-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Edit Property</h1>

            <form action={updateProperty} className="space-y-6 bg-white px-15 py-8 rounded-2xl shadow-lg border-slate-100">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                    <input name="title"
                        defaultValue={house.title}
                        className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
                    <input
                     name="price"
                     defaultValue={house.price}
                     className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                    <input
                     name="location"
                     defaultValue={house.location}
                     className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button type="submit" className="flex-1 bg-blue-600 text-white px-2 py-3 rounded-xl font-bold cursor-pointer hover:bg-blue-700 active:scale-90 transition">
                        Save Changes
                    </button>
                    <Link href='/admin' type="button" className="px-6 py-4 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 active:scale-90 transition">Cancel</Link>
                </div>
            </form>
        </main>
    );
}