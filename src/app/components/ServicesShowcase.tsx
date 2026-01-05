'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ServicesShowcase() {
  return (
    <section
      id='services-showcase'
      className='relative py-24 bg-[#0B0E17] text-white overflow-hidden font-sans'
    >
      <div
        className='absolute inset-0 z-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(circle at center, #1E2545 0%, #0B0E17 70%)',
          opacity: 0.8,
        }}
      ></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
          <div className='max-w-2xl'>
            <div className='inline-flex items-center space-x-2 bg-white/10 border border-white/5 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm'>
              <span className='w-2.5 h-2.5 bg-[#FF7F3F] rounded-full shadow-[0_0_10px_#FF6B2C]'></span>
              <span className='text-white font-medium text-sm tracking-wide'>
                Service
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
              Experience the results of our <br className='hidden md:block' />
              commitment.
            </h2>
          </div>
          <div className='mb-2'>
            <a
              href='#'
              className='group bg-[#FF6B2C] hover:bg-orange-500 text-black font-bold text-lg py-3 pl-8 pr-2 rounded-full inline-flex items-center transition-all duration-300 shadow-lg shadow-orange-500/20'
            >
              JOIN WITH US
              <span className='ml-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300'>
                <i className='fa-solid fa-arrow-right'></i>
              </span>
            </a>
          </div>
        </div>

        <div className='relative w-full mb-20'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
              scale: 0.8,
            }}
            pagination={{ el: '#svc-pagination', clickable: true }}
            navigation={{
              nextEl: '#svc-next',
              prevEl: '#svc-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='serviceSwiper !pb-14 !pt-4 !overflow-visible'
          >
            <SwiperSlide className='dashboard-slide'>
              <Image
                src='/porto1.png'
                alt='Dashboard'
                width={700}
                height={400}
                className='w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700'
              />
            </SwiperSlide>
            <SwiperSlide className='dashboard-slide'>
              <Image
                src='/porto2.png'
                alt='Dashboard 2'
                width={700}
                height={400}
                className='w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700'
              />
            </SwiperSlide>
            <SwiperSlide className='dashboard-slide'>
              <Image
                src='/porto3.png'
                alt='Dashboard 3'
                width={700}
                height={400}
                className='w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700'
              />
            </SwiperSlide>
            <SwiperSlide className='dashboard-slide'>
              <Image
                src='/porto4.png'
                alt='Dashboard 4'
                width={700}
                height={400}
                className='w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700'
              />
            </SwiperSlide>
          </Swiper>

          <div className='flex items-center justify-center space-x-6 mt-4'>
            <button
              id='svc-prev'
              className='text-gray-400 hover:text-white transition-colors text-xl'
            >
              <i className='fa-solid fa-arrow-left'></i>
            </button>
            <div
              id='svc-pagination'
              className='!static !w-auto flex gap-2'
            ></div>
            <button
              id='svc-next'
              className='text-gray-400 hover:text-white transition-colors text-xl'
            >
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-[#0F121C] p-8 rounded-2xl border border-white/5 hover:border-[#FF7F3F]/50 transition-colors duration-300 group'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-8 h-8 rounded-full bg-[#FF7F3F] text-white flex items-center justify-center text-xs shadow-lg shadow-orange-500/20'>
                <i className='fa-solid fa-code'></i>
              </div>
              <h3 className='font-semibold text-lg text-white'>Product</h3>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              We develop e-commerce websites that are fast, secure, and
              optimized to drive sales.
            </p>
          </div>
          <div className='bg-[#0F121C] p-8 rounded-2xl border border-white/5 hover:border-[#FF7F3F]/50 transition-colors duration-300 group'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-8 h-8 rounded-full bg-[#FF7F3F] text-white flex items-center justify-center text-xs shadow-lg shadow-orange-500/20'>
                <i className='fa-solid fa-globe'></i>
              </div>
              <h3 className='font-semibold text-lg text-white'>Industry</h3>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Website Development tailored for your specific industry needs.
            </p>
          </div>
          <div className='bg-[#0F121C] p-8 rounded-2xl border border-white/5 hover:border-[#FF7F3F]/50 transition-colors duration-300 group'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-8 h-8 rounded-full bg-[#FF7F3F] text-white flex items-center justify-center text-xs shadow-lg shadow-orange-500/20'>
                <i className='fa-solid fa-share-nodes'></i>
              </div>
              <h3 className='font-semibold text-lg text-white'>
                Core Technologies
              </h3>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Laravel, PHP, HTML, CSS, Tailwind, JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
