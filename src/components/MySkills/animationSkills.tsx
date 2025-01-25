'use client'

import createScrollTrigger from "@/functions/Animation/navBarAnimation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export default function AnimationSkills() {

    useEffect(()=>{
        setTimeout(()=>{
            createScrollTrigger({
                trigger: '#skills',
                onAnimacao:() => {
                    document.querySelector('.nav__bar .bar')?.classList.toggle('left-[168px]')
                    document.querySelector('#skills__link')?.classList.toggle('text-primaria')
                },
            })
        },3000)

        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}