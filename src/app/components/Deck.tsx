'use client'

import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import React, { useState, useMemo } from 'react'

// SSR concept cards
const contentCards = [
  {
    title: "What is SSR?",
    body: `Server-Side Rendering (SSR) is when HTML is generated on the server before sending it to the browser. It's ready to display immediately, improving load speed and SEO.`,
  },
  {
    title: "How it Works",
    body: `1. User requests a page\n2. Server runs React/Next.js to generate HTML\n3. HTML is sent to browser\n4. JS hydrates it for interactivity`,
  },
  {
    title: "Why Use SSR?",
    body: `✅ SEO-friendly\n✅ Fast initial load\n✅ Dynamic content per request`,
  },
  {
    title: "SSR in Next.js",
    body: `Use getServerSideProps to fetch data on the server and render the page accordingly.`,
  },
  {
    title: "Real-Life Examples",
    body: `🛒 eCommerce (price updates)\n🗞️ News sites (fresh content)\n👤 Personalized dashboards`,
  },
]

// ✅ Helper: static random rotations (only once per render)
const useRandomRotations = (length: number) => {
  return useMemo(() => {
    return Array.from({ length }, () => -5 + Math.random() * 10)
  }, [length])
}

// ✅ Transform function for animated transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const rotations = useRandomRotations(contentCards.length)
  const [gone] = useState(() => new Set<number>())
  
  const [springs, api] = useSprings(contentCards.length, i => ({
    x: 0,
    y: 0,
    scale: 1,
    rot: rotations[i],
    from: { x: 0, y: -1000, scale: 1.5, rot: 0 },
    delay: i * 100,
  }))

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger:boolean = vx > 0.2
    const dir = xDir < 0 ? -1 : 1

    if (!down && trigger) gone.add(index)

    api.start(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 100 + (isGone ? dir * 10 * vx : 0) + rotations[i]
      const scale = down ? 1.1 : 1
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })

    if (!down && gone.size === contentCards.length) {
      setTimeout(() => {
        gone.clear()
        api.start(i => ({
          x: 0,
          y: 0,
          scale: 1,
          rot: rotations[i],
          delay: i * 100,
        }))
      }, 600)
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center p-6">
      <div className="relative w-80 h-96">
        {springs.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ x, y, zIndex: contentCards.length - i }}
          >
            {/* Card Back */}
            <animated.div
              className="absolute top-0 left-0 w-full h-full rounded-xl bg-blue-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                transform: interpolate([rot, scale], trans),
              }}
            />
            {/* Card Front */}
            <animated.div
              {...bind(i)}
              className="relative w-full h-full p-6 rounded-xl bg-white shadow-xl text-gray-800 border-4 border-gray-200"
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              {/* Corner Content */}
              <div className="absolute top-2 left-3 text-xl font-bold text-red-500">{i + 1}</div>
              <div className="absolute bottom-2 right-3 text-xl font-bold text-red-500 transform rotate-180">{i + 1}</div>
              
              {/* Main Content */}
              <div className="w-full h-full flex flex-col justify-center items-center text-center select-none">
                <h3 className="text-xl font-bold mb-4">{contentCards[i].title}</h3>
                <p className="text-sm whitespace-pre-line">{contentCards[i].body}</p>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
