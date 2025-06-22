"use client"
import VerticalTimeline from "./components/VerticalTimeline"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"


export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
    const [{ width, height, top, left }, measure] = useElementDimensions(ref)

    // Keep X centered, but let Y follow the mouse with a spring effect.
    const gradientX = useMotionValue(0.5)
    const gradientY = useSpring(useMotionValue(0.5), { stiffness: 200, damping: 50 })

    const background = useTransform(
        () =>
            `radial-gradient(circle at calc(${
                gradientX.get() * 100
            }% - ${left}px) calc(${
                gradientY.get() * 100
            }% - ${top}px), #0cdcf7, #ff0088, #fff312)`
    )
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Wavy text animation
        document.fonts.ready.then(() => {
            if (!containerRef.current) return
            const { chars } = splitText(containerRef.current.querySelector(".wavy")!)
            containerRef.current.style.visibility = "visible"
            animate(chars, { y: [-20, 20] }, { repeat: Infinity, repeatType: "mirror", ease: "easeInOut", duration: 2, delay: stagger(0.15, { startDelay: -0.15 * chars.length }) })
        })
    }, [])

    return (
          <div
            className="min-h-screen relative"
            onPointerMove={(e) => {
              if (height) {
                gradientY.set(e.clientY / height)
              }
            }}
          >
            <motion.div
                ref={ref}
                className="absolute inset-0 w-full h-full"
                style={{ background, cursor: "none" }}
                onPointerEnter={() => measure()}
            />
        
        <div className="relative z-10 flex flex-col items-center py-12">
        <div ref={containerRef} className="container">
        <h1 className="text-center text-6xl font-bold pt-10 mb-8 text-white select-none"><span className="wavy">Learn Server-Side Rendering</span></h1>
        </div>
        <Stylesheet />
        <VerticalTimeline />
      </div>
      </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                visibility: hidden;
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
    )
}





function useElementDimensions(
    ref: React.RefObject<HTMLDivElement | null>
): [
    { width: number; height: number; top: number; left: number },
    VoidFunction
] {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
        if (!ref.current) return

        setSize(ref.current.getBoundingClientRect())
    }

    // Note: This won't accurately reflect viewport size changes
    useEffect(() => {
        measure()
    }, [])

    return [size, measure]
}
