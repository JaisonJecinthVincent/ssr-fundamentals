'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PopularFrameworks() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const frameworks = [
    {
      name: 'Next.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
      language: 'React',
      features: ['Hybrid SSR + SSG', 'Built-in routing', 'API routes'],
      color: 'border-black text-black',
      link: 'https://nextjs.org/',
    },
    {
      name: 'Nuxt.js',
      logo: 'https://avatars.githubusercontent.com/u/23360933?s=200&v=4',
      language: 'Vue',
      features: ['Automatic SSR', 'File-based routing', 'Powerful modules'],
      color: 'border-green-500 text-green-700',
      link: 'https://nuxt.com/',
    },
    {
      name: 'SvelteKit',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      language: 'Svelte',
      features: ['Server rendering by default', 'Minimal bundle size', 'Speed focused'],
      color: 'border-orange-500 text-orange-600',
      link: 'https://kit.svelte.dev/',
    },
    {
      name: 'Angular Universal',
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      language: 'Angular',
      features: ['Full SSR support', 'State transfer', 'Integrated tooling'],
      color: 'border-red-500 text-red-600',
      link: 'https://angular.io/guide/universal',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-indigo-600 text-center" data-aos="fade-up">
        🚀 Popular Frameworks Supporting SSR
      </h1>

      <p className="text-lg text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        Several modern frameworks make server-side rendering (SSR) simple and powerful. Here&apos;s a look at some of the top tools available across ecosystems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {frameworks.map((fw, index) => (
          <div
            key={fw.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`bg-white shadow-md p-6 rounded-xl border-t-4 ${fw.color} hover:shadow-xl transition-transform transform hover:scale-105`}
          >
            <a href={fw.link} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-4 mb-4">
                <img src={fw.logo} alt={`${fw.name} logo`} className="h-10 w-10" />
                <h2 className="text-xl font-bold">{fw.name}</h2>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Language:</span> {fw.language}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {fw.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </a>
          </div>
        ))}
      </div>

      <p className="mt-16 text-center text-lg text-gray-600" data-aos="fade-up" data-aos-delay="500">
        ✨ These frameworks give you the power to balance performance, flexibility, and SEO — all while keeping development productive.
      </p>
    </main>
  );
}
