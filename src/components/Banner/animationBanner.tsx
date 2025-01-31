'use client'

import { useLayoutEffect } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import createScrollTrigger from '@/functions/Animation/navBarAnimation';
import { gsap } from 'gsap';

export default function AnimationBanner() {
    useLayoutEffect(()=>{
        createScrollTrigger({
            trigger: '#home',
            onAnimacao:() => {
                document.querySelector('.nav__bar .bar')?.classList.toggle('hidden')
            },
        })

        gsap.fromTo('.info__banner , img', {
            visibility: 'hidden',
            opacity:0,
            scale: 0.5,
        },{
            scale: 1,
            visibility: 'visible',
            opacity:1,
            duration: 1,
            delay: .3,
        })

        return () => {
            ScrollTrigger.killAll()
        }
    },[])
    
    return null;
}