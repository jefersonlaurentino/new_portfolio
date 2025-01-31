'use client'

import { animationAxisX, animationStagger, animationVisible } from "@/functions/Animation/animationElements"
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

            animationStagger({
                elementAnimation: '.slide__ling__skills .div__skill',
                elementListener: '.slide__ling__skills',
            })

            animationAxisX({
                elementAnimation: '.soft__skills #skills_1',
                elementListener: '.soft__skills #skills_1',
                x: '50%'
            })

            animationVisible({
                elementAnimation: '.soft__skills #skills_2',
                elementListener: '.soft__skills #skills_2',
            })

            animationAxisX({
                elementAnimation: '.soft__skills #skills_3',
                elementListener: '.soft__skills #skills_3',
                x: '-50%',
            })

        },4000)

        return ()=>{
            ScrollTrigger.killAll()
        }
    },[])

    return null
}