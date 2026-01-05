'use client';
import { Link } from 'react-scroll';
import { TextAnimate } from '@/components/ui/text-animate';

export default function HeroSection() {
  return (
    <section
      id='home'
      className='relative min-h-screen bg-[#0B0E17] text-white font-sans overflow-hidden flex flex-col'
    >
      <div className='absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:80px_100%]' />
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#FF6B2C] opacity-10 blur-[150px] rounded-full pointer-events-none z-0' />

      <div className='relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 mt-10 md:mt-0 pt-20'>
        {/* <h1
          className='text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-6'
          data-aos='fade-up'
        >
          Empowering Your Business with  Empowering Your Business with
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400'>
           Empowering Your Business with
          </span>
        </h1> */}
        <TextAnimate
          animation='blurIn'
          as='h3'
          className='text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-6'
        >
          Empowering Your Business with Empowering Your Business with
        </TextAnimate>
        <p
          className='text-gray-400 text-lg md:text-xl max-w-2xl mb-10 font-light'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          End-to-end technology support to keep your operations competitive in
          the digital era.
        </p>
        <div
          className='flex flex-col md:flex-row items-center gap-4 mb-20'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='group bg-[#FF6B2C] hover:bg-orange-500 text-black font-bold text-base py-3 pl-8 pr-2 rounded-full inline-flex items-center transition-all duration-300 shadow-lg shadow-orange-500/20 cursor-pointer'
          >
            JOIN WITH US
            <span className='ml-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300'>
              <i className='fa-solid fa-arrow-right'></i>
            </span>
          </Link>

          <Link
            to='about'
            smooth={true}
            duration={500}
            className='bg-white text-black hover:bg-gray-200 font-bold text-base py-4 px-10 rounded-full transition duration-300 cursor-pointer'
          >
            VIEW MORE
          </Link>
        </div>
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-6 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div
            className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#FF6B2C]/50 transition duration-300 group'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-blue-400 mb-6 group-hover:bg-[#FF6B2C] group-hover:text-white transition duration-300'>
              <i className='fa-solid fa-screwdriver-wrench'></i>
            </div>
            <h3 className='text-xl font-bold mb-3'>Custom Development</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              We build apps designed specifically to match your business goals
              and workflows.
            </p>
          </div>

          <div
            className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#FF6B2C]/50 transition duration-300 group'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <div className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-purple-400 mb-6 group-hover:bg-[#FF6B2C] group-hover:text-white transition duration-300'>
              <i className='fa-solid fa-chart-line'></i>
            </div>
            <h3 className='text-xl font-bold mb-3'>Scalable Architecture</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Every product is built to grow — ready for more users, features,
              and integration.
            </p>
          </div>

          <div
            className='bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-[#FF6B2C]/50 transition duration-300 group'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <div className='w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-green-400 mb-6 group-hover:bg-[#FF6B2C] group-hover:text-white transition duration-300'>
              <i className='fa-solid fa-rotate'></i>
            </div>
            <h3 className='text-xl font-bold mb-3'>End-to-End Support</h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              From planning, development, deployment, to maintenance we handle
              everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
