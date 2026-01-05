'use client';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: 'hero-section', label: 'Home' },
    { href: 'services-process', label: 'Service' },
    { href: 'about', label: 'About Us' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/icon.png' alt='logo' width={40} height={40} />
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='text-2xl font-bold text-white tracking-wide hover:text-primary-orange transition cursor-pointer'
          >
            Utech
          </Link>
        </div>

        <div className='hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md shadow-lg'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth={true}
              duration={500}
              className='px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition text-white cursor-pointer'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden md:block'>
          <a
            href='mailto:UtechSH@gmail.com'
            className='bg-primary-orange text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg shadow-orange-500/20'
          >
            BOOK NOW
          </a>
        </div>

        <button
          className='md:hidden text-white text-2xl bg-white/10 p-2 rounded-lg backdrop-blur-md'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className='fas fa-bars'></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg'>
          <div className='flex flex-col items-center'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                smooth={true}
                duration={500}
                className='px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition w-full text-center cursor-pointer'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href='mailto:UtechSH@gmail.com'
              className='bg-primary-orange text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg shadow-orange-500/20 my-4'
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
