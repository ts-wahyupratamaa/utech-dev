export default function ContactSection() {
  return (
    <section id='contact' className='py-20 bg-[#0B0E17] text-white'>
      <div className='max-w-4xl mx-auto px-6'>
        <div
          data-aos='zoom-in'
          className='p-10 rounded-3xl text-center relative overflow-hidden'
          style={{
            backgroundImage:
              'linear-gradient(180deg, #181d3f 0%, #0e1325 100%)',
            border: '1px solid #2d3748',
          }}
        >
          <div
            className='absolute inset-0 z-0 opacity-20'
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 10%, #4a2180 0%, transparent 70%)',
            }}
          ></div>

          <div className='relative z-10'>
            <p className='text-sm font-semibold text-primary-orange mb-4 flex items-center justify-center'>
              <span className='w-2 h-2 bg-primary-orange rounded-full mr-2'></span>{' '}
              Become A Part Of Us
            </p>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-3xl mx-auto'>
              Ready to Elevate Your Business with Next-Gen Digital Solutions?
            </h2>
            <p className='text-lg text-gray-400 mb-10 max-w-2xl mx-auto'>
              Let's take your ideas to the next level! Join with us and
              transform your vision into a powerful digital product.
            </p>

            <div className='flex justify-center'>
              <a
                href='mailto:UtechSH@gmail.com'
                className='bg-primary-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-block text-lg'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
