'use client';

import ScrollLink from '@/app/components/ScrollLink';
import { navLinks } from '@/app/lib/content';
import { buildWhatsAppLink } from '@/app/lib/whatsapp';

export default function Footer() {
  return (
    <footer className='bg-[#0B0E17] py-12 text-gray-400'>
      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-10'>
        <div>
          <ScrollLink
            to='home'
            className='text-2xl font-bold text-white mb-4 block hover:text-primary-orange transition cursor-pointer'
          >
            U<span className='text-primary-orange'>Tech</span>
          </ScrollLink>

          <p className='text-sm mb-6 max-w-xs'>
            Designed by you, coded by us. We turn your ideas into scalable and
            impactful digital experiences.
          </p>

          <a
            href={buildWhatsAppLink('Halo Utech, saya ingin konsultasi.')}
            target='_blank'
            rel='noreferrer'
            className='bg-[#FF6B2C] text-black py-2.5 md:py-3 px-6 md:px-8 rounded-full inline-block font-semibold text-sm md:text-base shadow-lg shadow-orange-500/20'
          >
            Get started
          </a>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-4'>Feature</h4>
          <ul className='space-y-2 text-sm'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  className='hover:text-primary-orange transition cursor-pointer'
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-4'>Company Info</h4>

          <div className='space-y-3'>
            <p className='text-sm flex items-center'>
              <i className='fas fa-phone mr-3 text-primary-orange'></i>
            +62 896-9948-1497
            </p>

            <a
              href={buildWhatsAppLink('Halo Utech, saya ingin konsultasi.')}
              target='_blank'
              rel='noreferrer'
              className='text-sm flex items-center hover:text-primary-orange transition'
            >
              <i className='fab fa-whatsapp mr-3 text-primary-orange'></i>
              WhatsApp: +62 896-9948-1497
            </a>

            <p className='text-sm flex items-center'>
              <i className='fas fa-map-marker-alt mr-3 text-primary-orange'></i>
              Malang, East Java – Indonesia
            </p>
          </div>

          <div className='mt-6 w-full h-40 bg-gray-700 rounded-lg overflow-hidden border border-gray-700'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!4v1768413363608!6m8!1m7!1s1QbbooDQZlrk12jhygxkQQ!2m2!1d-7.952410434556477!2d112.6251135370523!3f29.697150079024205!4f-16.038201255070646!5f0.7820865974627469'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 mt-10 text-center text-sm border-t border-gray-700 pt-8'>
        © 2025 Utech Digital Solutions. All Rights Reserved
      </div>
    </footer>
  );
}
