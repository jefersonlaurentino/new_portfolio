'use client'

import createScrollTrigger from "@/functions/Animation/navBarAnimation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"


export default function AnimationContact() {
    useEffect(()=>{
        setTimeout(()=>{
            createScrollTrigger({
                trigger: '#contact',
                onAnimacao: () =>{
                    document.querySelector('.nav__bar .bar')?.classList.toggle('left-[253px]')
                    document.querySelector('#contact__link')?.classList.toggle('text-primaria')
                }
            })
        },3500)

        return () =>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}