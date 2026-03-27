import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import Link from "next/link";

interface PropertyProps {
    id: string;
    image: string;
    price: string;
    address: string;
    beds: number;
    baths: number;
    length: number;
}

export default function PropertyCard({id, image, price, address, beds, baths, length}: PropertyProps) {
    return (
        <Link href={`/property/${id}`}>

        <div className="group border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <img
                src={image}
                alt={address}
                className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-sm" />
            <div className="p-5">

                <h3 className="text-2xl font-bold text-slate-900 mb-1 font-serif">{price}</h3>
                <p className="flex items-center text-slate-500 text-sm mb-6"><MapPin size={14} className="mr-1 text-blue-600" />
                    {address}</p>

                <div className="flex flex-col md:flex-row gap-1 justify-between items-center text-slate-600 border-t border-slate-300 pt-4 text-sm">
                    <span className="flex items-center gap-1"><Bed size={16} className="text-blue-600/80"/>{beds} Bed(s)</span>
                    <span className="flex items-center gap-1"><Bath size={16} className="text-blue-600/80"/>{baths} Bath(s)</span>
                    <span className="flex items-center gap-1"><Maximize size={16} className="text-blue-600/80"/>{length}m of length</span>
                </div>
            </div>
        </div>
        </Link>
    );
}