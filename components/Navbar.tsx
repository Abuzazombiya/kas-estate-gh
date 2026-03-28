'use client';
import { Home, Search, Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();

    return (
        <nav className='sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
                <div className='flex h-15 items-center justify-between'>

                    {/* Logo Section */}
                    <div className='flex items-center gap-2'>
                        <div className='bg-blue-600 p-1.5 rounded-lg'>
                            <Home className='text-white' size={20} />
                        </div>
                        <Link href='/' className='text-xl font-bold tracking-tight text-slate-900 font-serif'>
                            Kas<span className='text-blue-600'>Estate</span>
                        </Link>
                    </div>

                    {/* Nav Links For Desktop Or Large Screens */}
                    <div className='hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 font-serif'>
                        <Link href='/' className='hover:text-blue-600 transition'>Buy</Link>
                        <Link href='/' className='hover:text-blue-600 transition'>Rent</Link>
                        <Link href='/' className='hover:text-blue-600 transition'>Agents</Link>
                        <Link href='/' className='hover:text-blue-600 transition'>Contact</Link>
                    </div>

                    {/* Right Side Action Icons */}
                    <div className='flex items-center gap-2'>
                        <button className='p-2 cursor-pointer text-slate-500 hover:bg-slate-200 active:scale-70 rounded-full transition'>
                            <Search size={20} />
                        </button>
                        <button className='p-2 cursor-pointer text-slate-500 hover:bg-slate-200 active:scale-70 rounded-full transition'>
                            <Heart size={20} />
                        </button>
                        <div className='h-6 w-px bg-slate-200 mx-1'></div>
                        {!user ? (
                            <SignInButton>
                                <button className='hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition mx-2 cursor-pointer font-serif active:scale-90 active:bg-blue-600'>
                                    <span>Login</span>
                                </button>
                            </SignInButton>
                        ) : (
                            <UserButton />
                        )}

                        {/* Mobile Menu Button Interaction */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg active:scale-70'>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='md:hidden justify-center text-center bg-blue-100 p-4 space-y-4 shadow-lg rounded-xl mx-5 font-serif'>
                    <Link href='/' className='block text-base font-medium text-slate-600 hover:text-blue-600'>Buy</Link>
                    <Link href='/' className='block text-base font-medium text-slate-600 hover:text-blue-600'>Rent</Link>
                    <Link href='/' className='block text-base font-medium text-slate-600 hover:text-blue-600'>Agents</Link>
                    <Link href='/' className='block text-base font-medium text-slate-600 hover:text-blue-600'>Contact</Link>
                </div>
            )}
        </nav>
    );
}