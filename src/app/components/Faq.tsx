'use client';

import { useState } from 'react';
import useContent from '@/app/hooks/useContent';
import type { FaqItem } from '@/app/data/types';

function renderFaq(item: FaqItem) {
  switch (item.kind) {
    case 'tags':
      return (
        <>
          <p className='text-gray-400 leading-relaxed mb-4'>{item.intro}</p>
          <div className='flex flex-wrap gap-2'>
            {item.tags.map((tag) => (
              <span
                key={tag.label}
                className={`${tag.className} px-3 py-1 rounded-full text-sm`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </>
      );
    case 'steps':
      return (
        <ol className='space-y-3 text-gray-400'>
          {item.steps.map((step, i) => (
            <li key={step} className='flex items-start'>
              <span className='bg-primary-orange text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-1'>
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      );
    case 'timelines':
      return (
        <div className='grid md:grid-cols-2 gap-4'>
          {item.timelines.map((timeline) => (
            <div key={timeline.title} className='bg-gray-800/50 p-4 rounded-lg'>
              <h4 className='font-semibold text-gray-200 mb-1'>
                {timeline.title}
              </h4>
              <p className='text-gray-400 text-sm'>{timeline.duration}</p>
              <div className='w-full bg-gray-700 h-2 rounded-full mt-2 overflow-hidden'>
                <div
                  className='h-full rounded-full shadow-[0_0_10px_rgba(255,102,0,0.35)] transition-all duration-500 ease-out'
                  style={{
                    width: `${Math.round(
                      (timeline.maxWeeks / item.maxWeeks) * 100
                    )}%`,
                    backgroundColor: '#ff6600',
                    minWidth: '2px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    case 'packages':
      return (
        <div className='grid md:grid-cols-3 gap-4'>
          {item.packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`text-center p-4 rounded-lg bg-gray-800/30 ${
                pkg.highlight ? 'border border-primary-orange/30' : ''
              }`}
            >
              <div className='text-primary-orange text-2xl mb-2'>
                <i className={`fas fa-${pkg.icon}`}></i>
              </div>
              <h4 className='font-semibold text-gray-200 mb-1'>{pkg.title}</h4>
              <p className='text-gray-400 text-sm'>{pkg.desc}</p>
            </div>
          ))}
        </div>
      );
    case 'tech':
      return (
        <div className='space-y-4'>
          {item.groups.map((group) => (
            <Tech key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { faqItems, faqIntro } = useContent();
  const faqs: FaqItem[] = faqItems;

  return (
    <section
      id='technical-questions'
      className='min-h-screen bg-[#0B0E17] text-white py-20'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6'>
            {faqIntro.title}{' '}
            <span className='text-primary-orange'>{faqIntro.accent}</span>
          </h1>
          <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
            {faqIntro.desc}
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <h2 className='text-3xl font-bold mb-8 text-gray-200'>
              {faqIntro.listTitle}
            </h2>

            <div className='space-y-6'>
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={faq.question}
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
                      <div
                        className={`p-6 pt-0 border-t ${
                          isOpen ? 'border-primary-orange' : 'border-gray-700'
                        }`}
                      >
                        {renderFaq(faq)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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
              className='block w-full bg-primary-orange text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base text-center hover:bg-orange-600 transition'
            >
              {faqIntro.ctaLabel}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Tech({ title, items }: { title: string; items: string[] }) {
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
