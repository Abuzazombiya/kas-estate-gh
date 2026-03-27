'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "@/utils/uploadthing";

export default function AddProperty() {
    const [imageUrl, setImageUrl] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const propertyData = {
            title: formData.get("title"),
            price: formData.get("price"),
            location: formData.get("location"),
            beds: Number(formData.get("beds")),
            baths: Number(formData.get("baths")),
            length: Number(formData.get('length')),
            image_url: imageUrl,
        };

        const response = await fetch('/api/properties', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(propertyData),
        });

        if (response.ok) {
            alert('Property Added Successfully!');
            router.push('/admin');
        }
        setLoading(false);
    };

    return (
        <main className="max-w-2xl mx-auto py-20 px-6 font-serif">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Add New Properties</h1>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8">
                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-700">Upload Property Image</label>
                    {imageUrl ? (
                        <div className="relative group rounded-xl overflow-hidden h-64">
                            <img src={imageUrl} className="object-cover w-full h-full" />
                            <button
                                onClick={() => setImageUrl("") }
                                className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition cursor-pointer active:scale-90 rounded-xl  border border-slate-200">Change Image</button>
                        </div>
                    ) : (
                        <UploadDropzone
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => setImageUrl(res[0].ufsUrl) }
                            onUploadError={(error) => alert(error.message)}
                         className="border cursor-pointer border-slate-200"/>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="title" required className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="Property Title" />

                     <input name="price" required className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="₵500,000" />

                     <input type="text" name="location" required className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="Location eg. Accra, Ghana" /> 

                     <input name="beds" required type="number" className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="Bed(s)"/>

                     <input name="baths" required type="number" className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="Bath(s)"/>

                     <input name="length" required type="number" placeholder="Length in meters" className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" />

                    <button
                    type="submit"
                    disabled={loading || !imageUrl}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-slate-300  disabled:active:scale-100 active:scale-90 cursor-pointer">
                        {loading ? 'Adding...' : "Add Property"}
                    </button>

                </form>
             </div>

             

                {/* <div className="grid grid-cols-2 gap-4"> */}
                    {/* <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
                       
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bed(s)</label>
                        
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bath(s)</label>
                        
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Length</label>
                        
                    </div> */}

                {/* </div> */}

                {/* <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                    <input type="text" name="location" required className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="Accra Ghana" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
                    <input type="text" name="image_url" required className="w-full p-3 rounded-lg border border-slate-200 outline-blue-600" placeholder="https://images...." />
                </div> */}
            
        </main>
    );
}