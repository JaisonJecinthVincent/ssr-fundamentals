'use client';

import Link from 'next/link';
import React from 'react';
import AOS from "aos";
import { useEffect } from 'react';

export const topics = [
  { label: 'What is SSR?', href: '/what-is-ssr' },
  { label: 'Case Studies / Demos', href: '/demos' },
  { label: 'CSR vs SSR vs SSG vs ISR', href: '/comparison' },
  { label: 'When to Use SSR', href: '/when-to-use' },
  { label: 'Popular Frameworks', href: '/frameworks' },
  { label: 'How SSR Works', href: '/how-it-works' },
  { label: 'Benefits & Trade-offs', href: '/benefits' },
  { label: 'SSR Challenges', href: '/challenges' },
  { label: 'SEO and SSR', href: '/seo' },
  
];

export default function VerticalTimeline() {
    useEffect(() => {
        AOS.init({
          duration: 800,      // animation duration in ms
          easing: 'ease-in-out', // default easing
          once: true,         // whether animation should happen only once
        });
      }, []);
  return (
    <main className="px-6 py-12">
    

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/50" />

        <div className="space-y-4">
          {topics.map((topic, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="relative flex items-center w-full">
                {/* Left Column */}
                <div className="w-1/2 flex justify-end">
                  {isEven && (
                    <div className="w-auto pr-8">
                      <Link href={topic.href}>
                        <div data-aos="fade-right" className="bg-white/10 backdrop-blur-sm shadow-md rounded-xl p-4 transition transform group-hover:scale-[1.05] group-hover:shadow-lg">
                          <p className="block text-xl font-semibold text-white text-right whitespace-nowrap select-none">
                            {topic.label}
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-transparent border-4 border-white rounded-full z-10"
                />

                {/* Right Column */}
                <div className="w-1/2 flex justify-start">
                  {!isEven && (
                    <div className="w-auto pl-8">
                      <Link href={topic.href}>
                        <div data-aos="fade-left" className="bg-white/10 backdrop-blur-sm shadow-md rounded-xl p-4 transition transform group-hover:scale-[1.05] group-hover:shadow-lg">
                          <p className="block text-xl font-semibold text-white text-left whitespace-nowrap select-none">
                            {topic.label}
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
