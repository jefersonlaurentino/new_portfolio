'use client'

import { animationAxisX, animationTopBottom, animationVisible } from "@/functions/Animation/animationElements"
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
            // animação para 
            animationTopBottom({
                elementAnimation: '.highlighted__project h3',
                elementListener: '#projects',
            })

            animationAxisX({
                elementAnimation: '',
                elementListener: [...document.querySelector('.info__highlighted__project')!.childNodes] as Array<HTMLDivElement>,
            })

            animationAxisX({
                elementAnimation: '',
                elementListener: [...document.querySelector('.project2')!.childNodes] as Array<HTMLDivElement>,
                reverse: true
            })

            animationVisible({
                elementAnimation: '.last__info',
                elementListener: '.last__info',
            })

            animationAxisX({
                elementAnimation: '',
                elementListener: [...document.querySelector('.slide__projects')!.childNodes] as Array<HTMLDivElement>,
            })

            return ()=>{
                ScrollTrigger.killAll()
            }
        },3000)
    },[])
    return null
}

