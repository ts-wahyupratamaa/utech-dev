import Image from 'next/image';
import { aboutContent, aboutCards } from '@/app/lib/content';

export default function About() {
  return (
    <section id='about' className='py-20 bg-[#0B0E17] text-white'>
      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <div data-aos='fade-right' className='mb-8'>
            <p className='text-sm font-semibold text-primary-orange mb-2'>
              {aboutContent.eyebrow}
            </p>
            <h3 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight'>
              {aboutContent.title}{' '}
              <span className='text-primary-orange'>
                {aboutContent.accent}
              </span>
            </h3>
            <p className='text-md leading-relaxed text-gray-400'>
              {aboutContent.desc}
            </p>
          </div>
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              data-aos='fade-right'
              data-aos-delay={100 + index * 100}
              className='bg-custom-card-bg p-6 rounded-xl shadow-xl border border-gray-800 transition duration-300 hover:border-primary-orange'
            >
              <div className='flex justify-between items-center mb-3'>
                <p className='text-lg font-semibold text-gray-200'>
                  {card.title}
                </p>
                <span className='text-primary-orange text-2xl'>
                  <i className={`fas fa-${card.icon}`}></i>
                </span>
              </div>
              <p className='text-gray-400 mb-3 text-sm'>{card.desc}</p>
              <div className='flex space-x-3 mt-4 text-xs font-medium'>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div data-aos='fade-left' className='md:sticky md:top-20 md:self-start'>
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            width={600}
            height={600}
            className='rounded-2xl shadow-2xl border border-gray-700 w-full'
          />
        </div>
      </div>
    </section>
  );
}
