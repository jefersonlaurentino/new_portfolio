'use client'

import Image from "next/image"
import './style.css'
import { useContextApiSkill } from "@/contexts/ApiSkill"
import AnimacaoSkills from './animationSkills'

export default function MySkills() {
    const { ApiSkills } = useContextApiSkill()

    return(
        <>
        <section id="skills">
            <div className='background'>
                <div className='background__imagem'></div>
            </div>
            <h3>Hard Skills</h3>
            <section className="slide__ling__skills">
                {
                    ApiSkills ?
                        ApiSkills?.map((skill)=>{
                            return (
                                <div key={skill.id} className="div__skill">
                                    <Image 
                                        src={skill.imagem}
                                        alt={`Logo da tecnologia ${skill.title}`}
                                        height={60}
                                        width={60}
                                        priority
                                    />
                                    <p>{skill.title}</p>
                                </div>
                            )
                        })
                    :
                    <div className="text-white">Carregando...</div>
                }
            </section>

            <h3>Soft Skills</h3>

            <section className="soft__skills">
                <article className="skills" id="skills_1">
                    <h4>Resiliência</h4>
                    <p>Dediquei os últimos dois anos ao aprendizado de programação, superando desafios e desenvolvendo projetos como o RetroStation. Essa jornada reforçou minha capacidade de adaptação, foco e persistência em alcançar resultados.</p>
                </article>
                <article className="skills" id="skills_2">
                    <h4>Criatividade</h4>
                    <p>Tenho habilidade e pensar fora da caixa para desenvolver soluções únicas. Nos meus projetos, uso minha criatividade para criar designs atraentes e funcionalidades personalizadas que melhoram a experiência do usuário.</p>
                </article>
                <article className="skills" id="skills_3">
                    <h4>Ética</h4>
                    <p>Sou guiado por princípios de honestidade e respeito, tanto na vida pessoal quanto na profissional. Sempre busco agir com integridade, confiança e no compromisso de fazer o que é certo.</p>
                </article>
            </section>

        </section>
        <AnimacaoSkills/>
        </>
    )
}