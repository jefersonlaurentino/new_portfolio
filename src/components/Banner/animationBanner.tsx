'use client'

import { useEffect } from "react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import createScrollTrigger from '@/functions/Animation/navBarAnimation';

export default function AnimacaoBanner() {
    useEffect(()=>{
        createScrollTrigger({
            trigger: '#home',
            onAnimacao:() => {
                document.querySelector('.nav__bar .bar')?.classList.toggle('hidden')
            },
        })

        return () => {
            ScrollTrigger.killAll()
        }
    },[])
    
    return null;
}