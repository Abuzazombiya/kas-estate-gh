import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import { sql } from "@/lib/db";
import SearchBar from "@/components/SearchBar";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function Home(props: {
  searchParams: Promise<{ search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.search || "";

  const properties = await sql`
  SELECT * FROM properties
  WHERE location ILIKE ${'%' + query + '%'}
  OR title ILIKE ${'%' + query + '%'}
  ORDER BY created_at DESC
   `;

    properties ? console.log("DB Connected") : console.log("DB Connection Failed");

  return (
    <main className="min-h-screen bg-slate-50 p-8">

      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Find Your Dream Home</h1>
        <p className="text-slate-500 text-lg">Discover the best properties across Ghana.</p>
        </div>

        <SearchBar />

       {properties.length > 0 ? (
        <div id="results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property: any) => (
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
        ) : (
          <div className="text-center py-24 bg-slate-50 border-2 border-dashed border-slate-100 rounded-3xl">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Search size={24} className="text-slate-400" />
            </div>
            <h3 className="text-slate-700 text-lx font-bold">No properties found</h3>
            <p className="text-slate-500 mt-2 mb-8">Oops 😔, We couldn't find anything matching "{query}". Try a different location.</p>
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition active:scale-90">View All Properties</Link>
          </div>
        )}
      </div>
    </main>
  );
}