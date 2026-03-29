import DeleteButton from "@/components/DeleteButton";
import { sql } from "@/lib/db";
import { Trash2, Edit, Plus, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  // Fetch properties from Neon
  const properties = await sql`SELECT * FROM properties ORDER BY created_at DESC`;

  return (
    <main className="max-w-7xl mx-auto py-12 px-6 font-serif">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 text-sm md:text-xl">Manage all your Kas Estate listings</p>
        </div>
        <Link href="/add-property" className="bg-blue-600 text-white text-sm md:text-xs py-3 md:py-3 px-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition">
          <Plus size={20} /> Add New
        </Link>
      </div>

      {/* Management Table - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Property</th>
              <th className="p-4 font-semibold text-slate-700">Location</th>
              <th className="p-4 font-semibold text-slate-700">Price</th>
              <th className="p-4 font-semibold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((house) => (
              <tr key={house.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4 flex items-center gap-3">
                  <img src={house.image_url} className="w-12 h-12 rounded-lg object-cover" />
                  <span className="font-medium text-slate-900">{house.title}</span>
                </td>
                <td className="p-4 text-slate-600">{house.location}</td>
                <td className="p-4 text-blue-600 font-bold">₵{house.price}</td>
                <td className="p-4 flex text-right space-x-2">
                  <Link href={`/property/${house.id}`} className="inline-block p-2 text-slate-400 hover:text-blue-600 active:scale-90">
                    <ExternalLink size={18} />
                  </Link>
                  <Link href={`/admin/edit/${house.id}`} className="p-2 text-slate-400 hover:text-blue-600 active:scale-90">
                  <Edit size={18} />
                </Link>
                  <DeleteButton id={house.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Shown on mobile, hidden on desktop */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {properties.map((house) => (
          <div key={house.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex gap-3 mb-3">
              <img src={house.image_url} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{house.title}</h3>
                <p className="text-sm text-slate-500">{house.location}</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-slate-200 pt-3">
              <p className="text-blue-600 font-bold">₵{house.price}</p>
              <div className="flex gap-2">
                <Link href={`/property/${house.id}`} className="p-2 text-slate-400 hover:text-blue-600 active:scale-90">
                  <ExternalLink size={18} />
                </Link>
                <Link href={`/admin/edit/${house.id}`} className="p-2 text-slate-400 hover:text-blue-600 active:scale-90">
                  <Edit size={18} />
                </Link>
                <DeleteButton id={house.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}