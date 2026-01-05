import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='about' className='py-20 bg-[#0B0E17] text-white'>
      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <div data-aos='fade-right' className='mb-8'>
            <p className='text-sm font-semibold text-primary-orange mb-2'>
              Who We Are?
            </p>
            <h3 className='text-4xl md:text-5xl font-extrabold mb-4 leading-tight'>
              Designed for You,{' '}
              <span className='text-primary-orange'>Coded by Us!</span>
            </h3>
            <p className='text-md leading-relaxed text-gray-400'>
              Every idea starts with you—we just make it real. Your vision leads
              the way, our technology brings it to life.
            </p>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='100'
            className='bg-custom-card-bg p-6 rounded-xl shadow-xl border border-gray-800 transition duration-300 hover:border-primary-orange'
          >
            <div className='flex justify-between items-center mb-3'>
              <p className='text-lg font-semibold text-gray-200'>
                Innovation at the Core
              </p>
              <span className='text-primary-orange text-2xl'>
                <i className='fas fa-lightbulb'></i>
              </span>
            </div>
            <p className='text-gray-400 mb-3 text-sm'>
              We create technology that keeps businesses ahead. We continuously
              adopt modern frameworks, automation, and creative problem-solving
              to deliver future-proof digital products.
            </p>
            <div className='flex space-x-3 mt-4 text-xs font-medium'>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                Easy Customization
              </span>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                Tech Innovation
              </span>
            </div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            className='bg-custom-card-bg p-6 rounded-xl shadow-xl border border-gray-800 transition duration-300 hover:border-primary-orange'
          >
            <div className='flex justify-between items-center mb-3'>
              <p className='text-lg font-semibold text-gray-200'>
                Quality That Drives Performance
              </p>
              <span className='text-primary-orange text-2xl'>
                <i className='fas fa-medal'></i>
              </span>
            </div>
            <p className='text-gray-400 mb-3 text-sm'>
              Every line of code is built for reliability, speed, and
              scalability. We follow industry development standards, testing,
              and secure architecture to ensure long-lasting product
              performance.
            </p>
            <div className='flex space-x-3 mt-4 text-xs font-medium'>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                High Performance
              </span>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                Industry Standards
              </span>
            </div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='300'
            className='bg-custom-card-bg p-6 rounded-xl shadow-xl border border-gray-800 transition duration-300 hover:border-primary-orange'
          >
            <div className='flex justify-between items-center mb-3'>
              <p className='text-lg font-semibold text-gray-200'>
                Collaboration for Real Impact
              </p>
              <span className='text-primary-orange text-2xl'>
                <i className='fas fa-handshake'></i>
              </span>
            </div>
            <p className='text-gray-400 mb-3 text-sm'>
              We listen, we care, and we build together. We partner with clients
              as part of their team, aligning technology with business goals for
              measurable results.
            </p>
            <div className='flex space-x-3 mt-4 text-xs font-medium'>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                Partnership
              </span>
              <span className='bg-gray-800 text-primary-orange px-3 py-1 rounded-full'>
                Communication
              </span>
            </div>
          </div>
        </div>
        <div data-aos='fade-left' className='md:sticky md:top-20 md:self-start'>
          <Image
            src='/13.png'
            alt='Team About Us'
            width={600}
            height={600}
            className='rounded-2xl shadow-2xl border border-gray-700 w-full'
          />
        </div>
      </div>
    </section>
  );
}