import {Search, MapPin} from 'lucide-react';

export default function Hero () {
    return(
        <section className='relative h-150 w-full flex items-center justify-center overflow-hidden'>

            {/* Background Image */}
            <div className='absolute inset-0 z-0'>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" alt="Luxury Home" className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] '></div>
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-4xl w-full px-6 text-center'>
                <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-serif'>Find Your Dream Home at Kas<span className='text-blue-400'>Estate</span></h1>
                <p className='text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-serif'>Discover premium properties in the most sought-after neighborhoods. Your journey to a new home starts here.</p>

                {/* Search Bar Card */}

                <div className='bg-white p-2 md:p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center'>
                    <div className='flex items-center gap-3 px-4 flex-1 w-full border-b md:border-b-0 md:border-r border-slate-100 py-2'>
                        <MapPin className='text-blue-600' size={20}/>
                        <input 
                        type="text" 
                        placeholder='Enter City, Neighborhood, or Zip...' 
                        className='w-full outline-none text-slate-700 placeholder:text-slate-400 placeholder:italic font-medium font-serif' />
                    </div>

                    <div className='flex items-center gap-4 w-full md:w-auto font-serif'>
                        <select className='bg-transparent font-semibold text-slate-600 outline-none cursor-pointer px-2'>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>

                        <button className='cursor-pointer w-fit md:w-auto flex rounded-lg font-serif bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 gap-2 transition-all active:scale-95'>
                            <Search size={20} />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}