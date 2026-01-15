'use client';
import { TextAnimate } from '@/components/ui/text-animate';
import ScrollLink from '@/app/components/ScrollLink';
import useContent from '@/app/hooks/useContent';

export default function Hero() {
  const { heroContent, heroCards } = useContent();

  return (
    <section
      id='home'
      className='relative min-h-screen bg-[#0B0E17] text-white font-sans overflow-hidden flex flex-col'
    >
      <div className='absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:80px_100%]' />
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#FF6B2C] opacity-10 blur-[150px] rounded-full pointer-events-none z-0' />

      <div className='relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 mt-10 md:mt-0 pt-20'>
        <TextAnimate
          animation='blurIn'
          as='h3'
          className='text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-6'
        >
          {heroContent.title}
        </TextAnimate>
        <p
          className='text-gray-400 text-lg md:text-xl max-w-2xl mb-10 font-light'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          {heroContent.subtitle}
        </p>
        <div
          className='flex flex-row items-center justify-center gap-3 mb-20 w-full max-w-md sm:max-w-lg'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <ScrollLink
            to={heroContent.ctaPrimary.to}
            className='group bg-[#FF6B2C] hover:bg-orange-500 text-black font-bold text-xs sm:text-sm md:text-base py-2.5 md:py-3 pl-5 sm:pl-6 md:pl-8 pr-2 rounded-full inline-flex items-center justify-center w-1/2 min-w-0 whitespace-nowrap transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer'
          >
            {heroContent.ctaPrimary.label}
            <span className='ml-2 sm:ml-3 md:ml-4 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300'>
              <i className='fa-solid fa-arrow-right'></i>
            </span>
          </ScrollLink>

          <ScrollLink
            to={heroContent.ctaSecondary.to}
            className='bg-white text-black hover:bg-gray-200 font-bold text-xs sm:text-sm md:text-base py-2.5 md:py-4 px-5 sm:px-6 md:px-10 rounded-full transition duration-300 cursor-pointer w-1/2 min-w-0 text-center whitespace-nowrap'
          >
            {heroContent.ctaSecondary.label}
          </ScrollLink>
        </div>
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {heroCards.map((card, index) => (
            <div
              key={card.title}
              className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#FF6B2C]/50 transition duration-300 group'
              data-aos='fade-up'
              data-aos-delay={300 + index * 100}
            >
              <div
                className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl ${card.iconColor} mb-6 group-hover:bg-[#FF6B2C] group-hover:text-white transition duration-300`}
              >
                <i className={`fa-solid fa-${card.icon}`}></i>
              </div>
              <h3 className='text-xl font-bold mb-3'>{card.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
