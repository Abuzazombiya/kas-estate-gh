import { Bed, Bath, Maximize, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import {sql} from '@/lib/db'
import { notFound } from 'next/navigation';

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;

  const rows = await sql`SELECT * FROM properties WHERE id = ${id}`;
  const house = rows[0];

  if (!house) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-20 font-serif">

      {/* Main image from the DB */}
      <div className='h-100 md:h-150 w-full'>
        <img
          src={house.image_url}
          alt={house.title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <div className='lg:col-span-2'>
          <div className='flex justify-between items-start border-b border-slate-100 p-8'>
            <div>
              <h1 className='text-4xl font-bold text-slate-900'>{house.title}</h1>
              <p className='flex items-center text-slate-500 mt-2 text-lg'>
                <MapPin size={20} className='mr-1 text-blue-600' /> {house.location}
              </p>
            </div>
            <div className='text-right'>
              <p className='text-3xl font-bold text-blue-600'>{house.price}</p>
            </div>
          </div>

          {/* Real specs from the DB */}
          <div className='py-8 grid grid-cols-3 gap-4 border-b border-slate-100'>
            <div className='text-center p-4 bg-slate-50 rounded-xl'>
              <Bed className='mx-auto text-blue-600 mb-1' />
              <p className='font-bold text-slate-900'>{house.beds} Bed(s)</p>
            </div>
            <div className='text-center p-4 bg-slate-50 rounded-xl'>
              <Bath className='mx-auto text-blue-600 mb-1' />
              <p className='font-bold text-slate-900'>{house.baths} Bath(s)</p>
            </div>
            <div className='text-center p-4 bg-slate-50 rounded-xl'>
              <Maximize className='mx-auto text-blue-600 mb-1' />
              <p className='font-bold text-slate-900'>{house.length || 0}m of length</p>
            </div>
          </div>

          <div className='py-8'>
            <h2 className='text-2xl font-bold text-slate-900 mb-4'>Description</h2>
            <p className='text-slate-600 leading-relaxed text-lg italic'>
              Experience luxury living at {house.title}, a stunning property located in the heart of {house.location}. This exquisite residence offers unparalleled comfort and style, featuring {house.beds} spacious bedrooms, {house.baths} modern bathrooms, and a generous {house.length || 0}m of length. The open-concept design seamlessly blends indoor and outdoor living spaces, perfect for entertaining guests or enjoying quiet evenings at home. With its prime location and exceptional amenities, this property is a true gem in the real estate market.
            </p>
          </div>
        </div>

        {/* Contact Sidebar */}
        <div className='lg:col-span-1'>
          <div className='sticky top-24 border border-slate-200 rounded-2xl p-6 shadow-sm bg-white'>
            <h3 className='text-xl font-bold text-slate-900 mb-6'>Inquire About This Home</h3>
            <div className='space-y-4'>
              <input type="text" placeholder='Your Name' className='w-full p-3 border border-slate-200 rounded-lg outline-blue-600' />
              <button className='w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 active:scale-90 cursor-pointer transition'>Email Agent</button>
            </div>
          </div>
        </div>
      </div>
      
      
    </main>
  );
}