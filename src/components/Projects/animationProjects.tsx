'use client'

import createScrollTrigger from "@/functions/Animation/navBarAnimation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export default function AnimationProjects() {

    useEffect(()=>{
        setTimeout(()=>{
            createScrollTrigger({
                trigger: '#projects',
                onAnimacao:() => {
                    document.querySelector('.nav__bar .bar')?.classList.toggle('left-[84px]')
                    document.querySelector('#projects__link')?.classList.toggle('text-primaria')
                },
            })
            
        },2000)
        
        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}