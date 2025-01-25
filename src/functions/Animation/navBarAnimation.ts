import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const createScrollTrigger = ({ trigger , onAnimacao , end, start}: {trigger: string | HTMLElement, onAnimacao: ()=>void, end?: string, start?: string}) => {
    return ScrollTrigger.create({
            trigger,
            start: start? `${start} center` : 'top center',
            end: end? `${end} center` : 'bottom center',
            scrub: true,
            onEnter: onAnimacao,
            onEnterBack: onAnimacao,
            onLeave: onAnimacao,
            onLeaveBack: onAnimacao,
        })
}

export default (
    createScrollTrigger
)
