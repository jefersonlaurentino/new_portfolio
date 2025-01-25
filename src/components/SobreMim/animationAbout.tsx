'use client'

import createScrollTrigger from "@/functions/Animation/navBarAnimation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export default function AnimationBanner() {
    useEffect(()=>{
        createScrollTrigger({
            trigger: '#about__me',
            onAnimacao:() => {
                document.querySelector('.nav__bar .bar')?.classList.toggle('left-0')
                document.querySelector('#about__link')?.classList.toggle('text-primaria')
            },
        })

        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}