'use client'

import createScrollTrigger from "@/functions/Animation/navBarAnimation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react"

export default function AnimationAbout() {
    useLayoutEffect(()=>{
        createScrollTrigger({
            trigger: '#about__me',
            onAnimacao:() => {
                document.querySelector('.nav__bar .bar')?.classList.toggle('left-0')
                document.querySelector('#about__link')?.classList.toggle('text-primaria')
            },
        })

        // animação para texto sobre-me
        gsap.fromTo('.my__info',{
            opacity: 0,
            x: '100%',
        },{
            opacity:1,
            x:0,
            duration: 1.3,
            scrollbars: true,
            scrollTrigger: {
                trigger: '.my__info',
                start: 'top 80%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse'
            }
        })
        
        // animação para imagem no sobre-me
        gsap.fromTo('.div__my__imagem',{
            opacity: 0,
            scale:0.8,
        },{
            opacity:1,
            scale:1,
            duration: 1,
            scrollbars: true,
            scrollTrigger: {
                trigger: '.div__my__imagem',
                start: 'top 80%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse'
            }
        })

        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}