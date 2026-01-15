'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import Image from 'next/image';
import { showcaseContent } from '@/app/lib/content';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Showcase() {
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
                {showcaseContent.eyebrow}
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight'>
              {showcaseContent.titleLine1} <br className='hidden md:block' />
              {showcaseContent.titleLine2}
            </h2>
          </div>
          <div className='mb-2'>
            <a
              href='#'
              className='group bg-[#FF6B2C] hover:bg-orange-500 text-black font-bold text-sm md:text-lg py-2.5 md:py-3 pl-6 md:pl-8 pr-2 rounded-full inline-flex items-center transition-all duration-300 shadow-lg shadow-orange-500/20'
            >
              {showcaseContent.ctaLabel}
              <span className='ml-3 md:ml-4 w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300'>
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
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className='serviceSwiper !pb-14 !pt-4 !overflow-visible'
          >
            {showcaseContent.slides.map((slide) => (
              <SwiperSlide key={slide.src} className='dashboard-slide'>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={700}
                  height={400}
                  className='w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-700'
                />
              </SwiperSlide>
            ))}
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
          <p className='mt-6 text-center text-gray-400 text-sm md:text-base'>
            {showcaseContent.note}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {showcaseContent.highlights.map((item) => (
            <div
              key={item.title}
              className='bg-[#0F121C] p-8 rounded-2xl border border-white/5 hover:border-[#FF7F3F]/50 transition-colors duration-300 group'
            >
              <div className='flex items-center space-x-3 mb-4'>
                <div className='w-8 h-8 rounded-full bg-[#FF7F3F] text-white flex items-center justify-center text-xs shadow-lg shadow-orange-500/20'>
                  <i className={`fa-solid fa-${item.icon}`}></i>
                </div>
                <h3 className='font-semibold text-lg text-white'>
                  {item.title}
                </h3>
              </div>
              <p className='text-gray-400 text-sm leading-relaxed'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
