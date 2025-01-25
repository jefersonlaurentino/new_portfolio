'use client'

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function AnimationFooter() {
    useEffect(()=>{
        gsap.fromTo( '.arrow__top', 
            {
                opacity: 0,
            },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: '#projects',
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          )

        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}