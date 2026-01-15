'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { MenuIcon, type MenuIconHandle } from '@/components/ui/menu';
import useContent from '@/app/hooks/useContent';
import ScrollLink from '@/app/components/ScrollLink';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIconRef = useRef<MenuIconHandle>(null);

  const { navLinks } = useContent();

  return (
    <nav className='fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300'>
      <div className='relative max-w-7xl mx-auto px-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src='/icon.png' alt='logo' width={40} height={40} />
          <ScrollLink
            to='home'
            className='text-2xl font-bold text-white tracking-wide hover:text-primary-orange transition cursor-pointer'
          >
            Utech
          </ScrollLink>
        </div>

        <div className='hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md shadow-lg'>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              className='px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition text-white cursor-pointer'
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className='hidden md:block'>
          <a
            href='mailto:utechsh@gmail.com'
            target='_blank'
            className='bg-[#FF6B2C] text-black text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 shadow-lg shadow-orange-500/20'
          >
            BOOK NOW
          </a>
        </div>

        <button
          className='md:hidden absolute right-6 top-2 z-10 text-white text-2xl bg-white/10 p-2 rounded-lg backdrop-blur-md'
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
          onClick={() =>
            setIsMenuOpen((prev) => {
              const next = !prev;
              if (next) {
                menuIconRef.current?.startAnimation();
              } else {
                menuIconRef.current?.stopAnimation();
              }
              return next;
            })
          }
        >
          <MenuIcon ref={menuIconRef} size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg'>
          <div className='flex flex-col items-center'>
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                className='px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition w-full text-center cursor-pointer'
                onClick={() => {
                  setIsMenuOpen(false);
                  menuIconRef.current?.stopAnimation();
                }}
              >
                {link.label}
              </ScrollLink>
            ))}
            <a
              href='mailto:utechsh@gmail.com'
              className='bg-[#FF6B2C] text-black text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 shadow-lg shadow-orange-500/20 my-4'
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
