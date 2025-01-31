import gsap from "gsap"

type animationProps = {
    elementAnimation: string,
    elementListener: string | HTMLDivElement[],
    reverse?: boolean,
    x?: string,
}


// animation from top, To bottom
const animationTopBottom = ({elementAnimation , elementListener }:animationProps) =>{
    gsap.fromTo(elementAnimation, {
        y: '-50%',
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: elementListener,
            start: 'top 70%',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    })
}

// animation axis X one element or mult elements
const animationAxisX = ({elementAnimation , elementListener , x , reverse }:animationProps) =>{
    if (Array.isArray(elementListener)) {
        elementListener?.map((elem,index)=>{
            gsap.fromTo( elem, {
                x: (reverse == true )? (index % 2 == 0? '50%' : '-50%') : (index % 2 == 0? '-50%' : '50%'),
                opacity: 0,
            },{
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 85%',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse'
                }
            })
        })
        return;
    }
    
    gsap.fromTo( elementAnimation, {
        x,
        opacity: 0,
    },{
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: elementListener,
            start: 'top 85%',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    })
}


// animation from invisible, to visible
const animationVisible = ({elementAnimation, elementListener}:animationProps) =>{
    gsap.fromTo( elementAnimation, {
            opacity: 0,
            scale: .8,
        },{
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: elementListener,
                start: 'top 85%',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        })
}

// animation with stagger 
const animationStagger = ({elementAnimation, elementListener}: animationProps) =>{
    gsap.fromTo( elementAnimation,{
        opacity: 0,
        y: '50%',
    },{
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: elementListener,
            start: 'top 85%',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        }
    })
}

export {
    animationTopBottom,
    animationAxisX,
    animationVisible,
    animationStagger,
}