'use client'

import { animationTopBottom, animationVisible } from "@/functions/Animation/animationElements"
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

            animationTopBottom({
                elementAnimation: '.contact h4 span',
                elementListener: '.contact',
            })

            animationVisible({
                elementAnimation: '.contact form',
                elementListener: '.contact form',
            })
        },5000)

        return () =>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}