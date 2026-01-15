import Image from 'next/image';
import { servicesProcess } from '@/app/lib/content';

export default function Services() {
  return (
    <section id='services-process' className='py-20 bg-[#0B0E17] text-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div
          data-aos='fade-right'
          className='max-w-4xl mx-auto text-left mb-16'
        >
          <p className='text-sm font-semibold text-primary-orange mb-2 flex items-center'>
            <span className='w-2 h-2 bg-primary-orange rounded-full mr-2'></span>{' '}
            Service
          </p>
          <h2 className='text-4xl md:text-5xl font-extrabold leading-tight mb-4'>
            Complete Technology Services for Modern Businesses
          </h2>
          <p className='text-lg text-gray-400'>
            Every idea starts with you—we just make it real. Your vision leads
            the way, our technology brings it to life.
          </p>
        </div>

        <div className='flex h-[550px] w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-800'>
          {servicesProcess.map((item, index) => {
            const isLast = index === servicesProcess.length - 1;
            return (
              <div
                key={item.title}
                data-aos='fade-up'
                data-aos-delay={index * 100}
                className={`service-col group relative flex-1 h-full min-w-[50px] bg-custom-card-bg z-10 transition-all duration-1000 ease-in-out hover:flex-[3] group-hover:z-20 hover:border-primary-orange ${
                  isLast ? '' : 'border-r border-gray-800'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className='absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-[1200ms] md:opacity-0 md:group-hover:opacity-100 md:group-hover:scale-110'
                />
                <div className='absolute inset-0 w-full h-full bg-custom-dark-bg/80 flex flex-col items-center justify-between py-8'>
                  <p className='text-gray-400 text-xs font-semibold uppercase rotate-90 transform origin-bottom-left whitespace-nowrap translate-y-3'>
                    {item.label}
                  </p>
                  <p className='text-white text-6xl font-extrabold translate-y-2'>
                    {item.number}
                  </p>
                </div>
                <div className='absolute inset-0 p-8 flex flex-col justify-end text-left bg-gradient-to-t from-custom-card-bg/90 to-transparent opacity-0 group-hover:opacity-100'>
                  <p className='text-sm text-gray-400 mb-2 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-out delay-100'>
                    Service
                  </p>
                  <h3 className='text-4xl font-bold mb-4 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-out delay-150'>
                    {item.title}
                  </h3>
                  <p className='text-gray-400 text-sm mb-6 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-out delay-200'>
                    {item.desc}
                  </p>
                  <a
                    href='#'
                    className='inline-block bg-primary-orange text-white py-2 px-5 rounded-full text-xs font-semibold w-fit hover:bg-orange-600 transition duration-300 ease-out delay-250 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  >
                    See More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
