export default function Footer() {
  return (
    <footer className='bg-[#0B0E17] py-12 text-gray-400'>
      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-10'>
        {/* LEFT */}
        <div>
          <a
            href='#home'
            className='text-2xl font-bold text-white mb-4 block hover:text-primary-orange transition'
          >
            U<span className='text-primary-orange'>Tech</span>
          </a>

          <p className='text-sm mb-6 max-w-xs'>
            Designed by you, coded by us. We turn your ideas into scalable and
            impactful digital experiences.
          </p>

          <a
            href='mailto:UtechSH@gmail.com'
            className='bg-primary-orange text-white py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 inline-block font-semibold shadow-lg shadow-orange-500/20'
          >
            Get started
          </a>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className='font-semibold text-white mb-4'>Feature</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#home' className='hover:text-primary-orange transition'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-primary-orange transition'>
                About Us
              </a>
            </li>
            <li>
              <a
                href='#services-process'
                className='hover:text-primary-orange transition'
              >
                Service
              </a>
            </li>
            <li>
              <a href='#faq' className='hover:text-primary-orange transition'>
                FAQ
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-primary-orange transition'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className='font-semibold text-white mb-4'>Company Info</h4>

          <div className='space-y-3'>
            <p className='text-sm flex items-center'>
              <i className='fas fa-phone mr-3 text-primary-orange'></i>
              +62 xxx-xxxx-xxxx
            </p>

            <p className='text-sm flex items-center'>
              <i className='fas fa-envelope mr-3 text-primary-orange'></i>
              support@utech.com
            </p>

            <p className='text-sm flex items-center'>
              <i className='fas fa-map-marker-alt mr-3 text-primary-orange'></i>
              Malang, East Java – Indonesia
            </p>
          </div>

          <div className='mt-6 w-full h-40 bg-gray-700 rounded-lg overflow-hidden border border-gray-700'>
            <iframe
              src='https://maps.google.com/maps?q=Malang&t=&z=13&ie=UTF8&iwloc=&output=embed'
              width='100%'
              height='100%'
              style={{ border: 0 }}
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
