import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { sql } from "@/lib/db";

export default async function Home(){

  const properties = await sql`SELECT * FROM properties ORDER BY created_at DESC`;
  properties && console.log('DB Connected Successfully')

  return (
    <main className="min-h-screen bg-slate-50 p-8">

    <Hero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
        <div>
        <h1 className="text-3xl font-bold mb-8 text-slate-800 font-serif">Featured Properties</h1>
        <p className="text-slate-500 mt-2 italic font-serif">Hand-picked homes just for you</p>
        </div>

        <Link href='/' className="text-blue-600 font-semibold hover:underline hidden sm:block">View all properties →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
            key={property.id}
            id={property.id}
            image={property.image_url}
            title={property.title}
            price={property.price}
            address={property.location}
            beds={property.beds}
            baths={property.baths}
            length={property.length}
            />
          ))}
        </div>
      </div>
    </main>
  );
}