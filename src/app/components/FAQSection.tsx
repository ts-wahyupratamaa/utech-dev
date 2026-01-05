// 'use client';
// import { useState, useRef, useEffect } from 'react';

// const faqs = [
//   {
//     question: 'What services do you offer?',
//     answer:
//       'We provide comprehensive services including web development, mobile app development, game development, and advanced AI integration for businesses of all sizes. Our solutions are tailored to meet your specific business needs.',
//     tags: [
//       'Web Development',
//       'Mobile Apps',
//       'Game Development',
//       'AI Solutions',
//     ],
//   },
//   {
//     question: 'How do I start a project with your team?',
//     answer:
//       "Starting a project with us is simple and straightforward. Here's our process:",
//     list: [
//       'Initial Consultation: We discuss your requirements, goals, and timeline',
//       'Planning & Proposal: We create a detailed project plan and quote',
//       'Development: Our team starts building your solution',
//       'Launch & Support: We deploy and provide ongoing support',
//     ],
//   },
//   {
//     question: 'How long does a typical project take?',
//     answer:
//       'Project timelines vary based on complexity and requirements. Here are typical timeframes:',
//     timelines: [
//       { name: 'Small Website', time: '3-6 weeks', width: 'w-1/4' },
//       { name: 'E-commerce Platform', time: '8-16 weeks', width: 'w-2/3' },
//       { name: 'Custom Web App', time: '12-24 weeks', width: 'w-3/4' },
//       { name: 'Mobile Application', time: '10-20 weeks', width: 'w-1/2' },
//     ],
//     note: '*Timelines are estimated and may vary based on specific requirements.',
//   },
//   {
//     question: 'Do you provide maintenance after the project is completed?',
//     answer:
//       'Yes, we offer comprehensive post-launch maintenance and support packages to ensure your solution continues to perform optimally.',
//     packages: [
//       {
//         icon: 'fa-shield-alt',
//         name: 'Basic Support',
//         desc: 'Bug fixes & security updates',
//       },
//       {
//         icon: 'fa-cogs',
//         name: 'Standard Maintenance',
//         desc: 'Updates + performance monitoring',
//       },
//       {
//         icon: 'fa-star',
//         name: 'Premium Care',
//         desc: 'Full support + new features',
//       },
//     ],
//   },
//   {
//     question: 'What technologies do you use?',
//     answer:
//       'We leverage a diverse and modern technology stack to build robust, scalable solutions:',
//     tech: [
//       {
//         category: 'Frontend Technologies',
//         stack: ['React', 'Vue.js', 'JavaScript', 'CSS', 'HTML5'],
//       },
//       {
//         category: 'Backend Technologies',
//         stack: ['Laravel', 'PHP', 'Django', 'Node.js', 'Python'],
//       },
//       {
//         category: 'Databases',
//         stack: ['MySQL', 'PostgreSQL', 'MongoDB'],
//       },
//     ],
//   },
// ];

// export default function FAQSection() {
//   const [open, setOpen] = useState<number | null>(0);
//   const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     answerRefs.current.forEach((ref, index) => {
//       if (ref) {
//         if (index === open) {
//           ref.style.maxHeight = ref.scrollHeight + 'px';
//         } else {
//           ref.style.maxHeight = '0px';
//         }
//       }
//     });
//   }, [open]);

//   const toggleFAQ = (index: number) => {
//     setOpen(open === index ? null : index);
//   };

//   return (
//     <section
//       id='technical-questions'
//       className='min-h-screen bg-[#0B0E17] text-white py-20'
//     >
//       <div className='max-w-6xl mx-auto px-6'>
//         <div data-aos='fade-down' className='text-center mb-16'>
//           <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6'>
//             Technical <span className='text-primary-orange'>Questions</span>
//           </h1>
//           <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
//             Find answers to common questions about our services, processes, and
//             technologies.
//           </p>
//         </div>

//         <div className='grid lg:grid-cols-3 gap-8'>
//           <div className='lg:col-span-2'>
//             <h2 className='text-3xl font-bold mb-8 text-gray-200'>
//               Frequently Asked Questions
//             </h2>
//             <div className='space-y-6'>
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   data-aos='fade-right'
//                   data-aos-delay={index * 100}
//                   className={`bg-custom-card-bg rounded-xl border border-gray-700 overflow-hidden group hover:border-primary-orange transition duration-300 ${
//                     open === index ? 'active' : ''
//                   }`}
//                 >
//                   <button
//                     className='faq-question w-full text-left p-6 flex justify-between items-center focus:outline-none'
//                     onClick={() => toggleFAQ(index)}
//                   >
//                     <h3 className='text-xl font-semibold text-gray-200 pr-4'>
//                       {faq.question}
//                     </h3>
//                     <span className='text-primary-orange text-2xl transition-transform duration-300'>
//                       <i
//                         className={`fas ${
//                           open === index ? 'fa-minus' : 'fa-plus'
//                         }`}
//                       ></i>
//                     </span>
//                   </button>
//                   <div
//                     ref={(el) => {
//                       answerRefs.current[index] = el;
//                     }}
//                     className='faq-answer overflow-hidden max-h-0 transition-all duration-500'
//                   >
//                     <div className='p-6 pt-0 border-t border-gray-700'>
//                       <p className='text-gray-400 leading-relaxed'>
//                         {faq.answer}
//                       </p>
//                       {faq.tags && (
//                         <div className='mt-4 flex flex-wrap gap-2'>
//                           {faq.tags.map((tag) => (
//                             <span
//                               key={tag}
//                               className='bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm'
//                             >
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                       {faq.list && (
//                         <ol className='space-y-3 text-gray-400 mt-4'>
//                           {faq.list.map((item, i) => (
//                             <li key={i} className='flex items-start'>
//                               <span className='bg-primary-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-1 flex-shrink-0'>
//                                 {i + 1}
//                               </span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ol>
//                       )}
//                       {faq.timelines && (
//                         <div className='grid md:grid-cols-2 gap-4 mb-4 mt-4'>
//                           {faq.timelines.map((timeline) => (
//                             <div
//                               key={timeline.name}
//                               className='bg-gray-800/50 p-4 rounded-lg'
//                             >
//                               <h4 className='font-semibold text-gray-200 mb-2'>
//                                 {timeline.name}
//                               </h4>
//                               <p className='text-gray-400 text-sm'>
//                                 {timeline.time}
//                               </p>
//                               <div className='w-full bg-gray-700 h-2 rounded-full mt-2'>
//                                 <div
//                                   className={`bg-primary-orange h-2 rounded-full ${timeline.width}`}
//                                 ></div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {faq.note && (
//                         <p className='text-gray-400 text-sm mt-4'>{faq.note}</p>
//                       )}
//                       {faq.packages && (
//                         <div className='grid md:grid-cols-3 gap-4 mt-6'>
//                           {faq.packages.map((pkg) => (
//                             <div
//                               key={pkg.name}
//                               className='text-center p-4 bg-gray-800/30 rounded-lg'
//                             >
//                               <div className='text-primary-orange text-2xl mb-2'>
//                                 <i className={`fas ${pkg.icon}`}></i>
//                               </div>
//                               <h4 className='font-semibold text-gray-200 mb-1'>
//                                 {pkg.name}
//                               </h4>
//                               <p className='text-gray-400 text-sm'>
//                                 {pkg.desc}
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                       {faq.tech && (
//                         <div className='space-y-4 mt-6'>
//                           {faq.tech.map((techCat) => (
//                             <div key={techCat.category}>
//                               <h4 className='font-semibold text-gray-200 mb-2'>
//                                 {techCat.category}
//                               </h4>
//                               <div className='flex flex-wrap gap-2 mb-4'>
//                                 {techCat.stack.map((t) => (
//                                   <span
//                                     key={t}
//                                     className='bg-blue-900/30 text-blue-300 border border-blue-700/30 px-3 py-1 rounded-full text-sm'
//                                   >
//                                     {t}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div data-aos='fade-left' className='lg:col-span-1'>
//             <div className='bg-custom-card-bg p-8 rounded-2xl border border-gray-700 sticky top-24'>
//               <div className='text-center mb-8'>
//                 <div className='text-primary-orange text-4xl mb-4'>
//                   <i className='fas fa-life-ring'></i>
//                 </div>
//                 <h3 className='text-2xl font-bold text-gray-200 mb-2'>
//                   Still no luck?
//                 </h3>
//                 <h3 className='text-2xl font-bold text-gray-200 mb-4'>
//                   We can help!
//                 </h3>
//                 <p className='text-gray-400'>
//                   Contact us and we'll get back to you as soon as possible.
//                 </p>
//               </div>

//               <form className='space-y-6'>
//                 <div>
//                   <label
//                     htmlFor='name'
//                     className='block text-gray-300 mb-2 text-sm font-medium'
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white
//                                       focus:ring-2 focus:ring-primary-orange focus:border-transparent
//                                       placeholder-gray-500 transition duration-300'
//                     placeholder='Enter your name'
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor='email'
//                     className='block text-gray-300 mb-2 text-sm font-medium'
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type='email'
//                     id='email'
//                     name='email'
//                     className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white
//                                       focus:ring-2 focus:ring-primary-orange focus:border-transparent
//                                       placeholder-gray-500 transition duration-300'
//                     placeholder='you@example.com'
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor='question'
//                     className='block text-gray-300 mb-2 text-sm font-medium'
//                   >
//                     Ask a question
//                   </label>
//                   <textarea
//                     id='question'
//                     name='pertanyaan'
//                     rows={4}
//                     className='w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white
//                                          focus:ring-2 focus:ring-primary-orange focus:border-transparent
//                                          placeholder-gray-500 transition duration-300 resize-none'
//                     placeholder='Type your question here...'
//                   ></textarea>
//                 </div>

//                 <button
//                   type='submit'
//                   className='w-full bg-primary-orange text-white py-3 px-6 rounded-lg font-semibold
//                                    hover:bg-orange-600 transition duration-300 flex items-center justify-center
//                                    space-x-2 text-lg'
//                 >
//                   <span>SUBMIT A REQUEST</span>
//                   <i className='fas fa-paper-plane'></i>
//                 </button>

//                 <p className='text-center text-gray-500 text-sm mt-4'>
//                   We typically respond within 24 hours
//                 </p>
//               </form>

//               <div className='mt-8 pt-8 border-t border-gray-700'>
//                 <h4 className='font-semibold text-gray-200 mb-4'>
//                   Other ways to reach us:
//                 </h4>
//                 <div className='space-y-3'>
//                   <a
//                     href='mailto:UtechSH@gmail.com'
//                     className='flex items-center text-gray-400 hover:text-primary-orange transition duration-300'
//                   >
//                     <i className='fas fa-envelope mr-3'></i>
//                     <span>UtechSH@gmail.com</span>
//                   </a>
//                   <a
//                     href='tel:+1234567890'
//                     className='flex items-center text-gray-400 hover:text-primary-orange transition duration-300'
//                   >
//                     <i className='fas fa-phone mr-3'></i>
//                     <span>+1 (234) 567-890</span>
//                   </a>
//                   <div className='flex items-center text-gray-400'>
//                     <i className='fas fa-clock mr-3'></i>
//                     <span>Mon-Fri: 9AM-6PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

export default function TechnicalQuestions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer: (
        <>
          <p className='text-gray-400 leading-relaxed mb-4'>
            We provide comprehensive services including web development, mobile
            app development, game development, and advanced AI integration for
            businesses of all sizes.
          </p>
          <div className='flex flex-wrap gap-2'>
            <span className='bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm'>
              Web Development
            </span>
            <span className='bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm'>
              Mobile Apps
            </span>
            <span className='bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm'>
              Game Development
            </span>
            <span className='bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm'>
              AI Solutions
            </span>
          </div>
        </>
      ),
    },
    {
      question: 'How do I start a project with your team?',
      answer: (
        <ol className='space-y-3 text-gray-400'>
          {[
            'Initial consultation to understand your goals',
            'Planning & proposal with timeline and cost',
            'Development & testing phase',
            'Launch & ongoing support',
          ].map((step, i) => (
            <li key={i} className='flex items-start'>
              <span className='bg-primary-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-1'>
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
    {
      question: 'How long does a typical project take?',
      answer: (
        <div className='grid md:grid-cols-2 gap-4'>
          {[
            { title: 'Small Website', duration: '3–6 weeks', width: 'w-1/4' },
            {
              title: 'E-commerce Platform',
              duration: '8–16 weeks',
              width: 'w-2/3',
            },
            {
              title: 'Custom Web App',
              duration: '12–24 weeks',
              width: 'w-3/4',
            },
            {
              title: 'Mobile Application',
              duration: '10–20 weeks',
              width: 'w-1/2',
            },
          ].map((item, i) => (
            <div key={i} className='bg-gray-800/50 p-4 rounded-lg'>
              <h4 className='font-semibold text-gray-200 mb-1'>{item.title}</h4>
              <p className='text-gray-400 text-sm'>{item.duration}</p>
              <div className='w-full bg-gray-700 h-2 rounded-full mt-2'>
                <div
                  className={`bg-primary-orange h-2 rounded-full ${item.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      question: 'Do you provide maintenance after the project is completed?',
      answer: (
        <div className='grid md:grid-cols-3 gap-4'>
          {[
            {
              title: 'Basic Support',
              desc: 'Bug fixes & security updates',
              icon: 'shield-alt',
            },
            {
              title: 'Standard Maintenance',
              desc: 'Monitoring & updates',
              icon: 'cogs',
              highlight: true,
            },
            {
              title: 'Premium Care',
              desc: 'Full support + new features',
              icon: 'star',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`text-center p-4 rounded-lg bg-gray-800/30 ${
                item.highlight ? 'border border-primary-orange/30' : ''
              }`}
            >
              <div className='text-primary-orange text-2xl mb-2'>
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              <h4 className='font-semibold text-gray-200 mb-1'>{item.title}</h4>
              <p className='text-gray-400 text-sm'>{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      question: 'What technologies do you use?',
      answer: (
        <div className='space-y-4'>
          <TechGroup
            title='Frontend'
            items={['React', 'Vue', 'JavaScript', 'HTML5', 'CSS', 'Tailwind']}
          />
          <TechGroup
            title='Backend'
            items={['Django', 'Laravel', 'Node.js', 'PHP', 'Python']}
          />
          <TechGroup
            title='Database'
            items={['MySQL', 'PostgreSQL', 'MongoDB']}
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id='technical-questions'
      className='min-h-screen bg-[#0B0E17] text-white py-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6'>
            Technical <span className='text-primary-orange'>Questions</span>
          </h1>
          <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
            Find answers to common questions about our services, processes, and
            technologies.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* FAQ */}
          <div className='lg:col-span-2'>
            <h2 className='text-3xl font-bold mb-8 text-gray-200'>
              Frequently Asked Questions
            </h2>

            <div className='space-y-6'>
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`bg-custom-card-bg rounded-xl border overflow-hidden transition duration-300 ${
                      isOpen ? 'border-primary-orange' : 'border-gray-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className='w-full p-6 flex justify-between items-center text-left'
                    >
                      <h3 className='text-xl font-semibold text-gray-200 pr-4'>
                        {faq.question}
                      </h3>
                      <span
                        className={`text-primary-orange text-2xl transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        <i
                          className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}
                        ></i>
                      </span>
                    </button>

                    <div
                      className='transition-all duration-500 overflow-hidden'
                      style={{ maxHeight: isOpen ? 1000 : 0 }}
                    >
                      <div className='p-6 pt-0 border-t border-gray-700'>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className='bg-custom-card-bg p-8 rounded-2xl border border-gray-700 sticky top-24 h-fit'>
            <div className='text-center mb-6'>
              <div className='text-primary-orange text-4xl mb-4'>
                <i className='fas fa-life-ring'></i>
              </div>
              <h3 className='text-2xl font-bold text-gray-200 mb-2'>
                Still no luck?
              </h3>
              <p className='text-gray-400'>
                Contact us and we’ll help you directly.
              </p>
            </div>

            <a
              href='#contact'
              className='block w-full bg-primary-orange text-white py-3 rounded-lg font-semibold text-center hover:bg-orange-600 transition'
            >
              CONTACT SUPPORT
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function TechGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className='font-semibold text-gray-200 mb-2'>{title}</h4>
      <div className='flex flex-wrap gap-2'>
        {items.map((item) => (
          <span
            key={item}
            className='bg-gray-900/40 text-gray-300 border border-gray-700 px-3 py-1 rounded-full text-sm'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
