'use client'

import { lingUseProject } from '@/functions/lingUseProject';
import './style.css';
import callApiProjects, { ApiProjects } from "@/services/apiProjects";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useContextApiSkill } from '@/contexts/ApiSkill';
import AnimacaoProjects from './animationProjects'

export default function Projects() {
    const [ myProjects , setMyProjects ] = useState<ApiProjects[] | null>(null)
    const { ApiSkills } = useContextApiSkill()

    const getMyProjects = async() => {
        const myProjectes = await callApiProjects();
        setMyProjects(myProjectes)
    }
    
    useEffect(()=>{
        if (ApiSkills) {
            getMyProjects();
        }
    },[ ApiSkills ])

    return(
        <>
        <section id='projects' className="projetos">
            <h2>Projetos</h2>
            {
                myProjects ?
                <>
                <section className='highlighted__project'>
                <h3>RetroStation</h3>
                <div className='campo__infos'>
                    {
                        myProjects?.map((project)=>{
                            return (
                                (project.Highlighted) &&
                                    <React.Fragment key={project.id}>
                                        {
                                            Array.isArray(project.description) && project.description.map((description, index)=>{
                                                    if (index == 2) {
                                                        return (
                                                            <article className='last__info' key={description.id}>
                                                            <p>{description.text}</p>
                                                            <div className='img__highlighted__project'>
                                                                <Image 
                                                                    src={description.img}
                                                                    alt='Imagem pc'
                                                                    height={550}
                                                                    width={550}
                                                                />
                                                            </div>
                                                            <div className='buttons'>
                                                                <a href={project.repositorio} target="_blank" rel="noopener noreferrer">Ver Código</a>
                                                                <a href={project.deploy} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                                            </div>
                                                        </article>
                                                        )
                                                    } else {
                                                        return (
                                                            <article className='info__highlighted__project' key={description.id}>
                                                                <p className='text__highlighted__project'>{description.text}</p>
                                                                <div className='img__highlighted__project'>
                                                                    <Image 
                                                                        src={description.img}
                                                                        alt='Imagem pc'
                                                                        height={550}
                                                                        width={550}
                                                                    />
                                                                </div>
                                                            </article>
                                                        )
                                                    }
                                            })
                                        }
                                    </React.Fragment>
                                )
                        })
                    }
                </div>
            </section>
            <section className='slide__projects'>
                {
                        myProjects?.map((project)=> {
                            return (
                                (project.Highlighted != true) && 
                                <article className='project' key={project.id}>
                                    <div className='header__project'>
                                        <h4>{project.title}</h4>
                                        <div className='lings__use__project'>
                                            {
                                                lingUseProject(project.lings, ApiSkills!).map((ling)=>{
                                                    return (
                                                        <Image 
                                                            src={ling!.imagem} 
                                                            key={ling!.id}
                                                            alt={`tecnologia usada ${ling!.title}`}
                                                            height={50}
                                                            width={50}
                                                            className='w-full'
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='info__project'>
                                        <p>{ project.description.toString() }</p>
                                        <div className='imagem__project'>
                                            <Image 
                                                src={'/images/imagens__projects/tela_pc.png'}
                                                alt='Imagem pc'
                                                height={80}
                                                width={80}
                                                className='img__pc'
                                            />
                                            <Image 
                                                src={'/images/imagens__projects/tela_celular.png'}
                                                alt='Imagem celular'
                                                height={80}
                                                width={80}
                                                className='img__phone'
                                            />
                                            <Image 
                                                src={project.complited? project?.imagem_pc : '/images/imagens__projects/erro__img/pc-embreve.jpg'}
                                                alt='Imagem celular'
                                                height={80}
                                                width={80}
                                                className='img__project__pc'
                                            />
                                            <Image 
                                                src={project.complited? project?.imagem_phone : '/images/imagens__projects/erro__img/cl-embreve.jpg'}
                                                alt='Imagem celular'
                                                height={80}
                                                width={80}
                                                className='img__project__phone'
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='links__project'>
                                        <a href={project.repositorio} target="_blank" rel="noopener noreferrer">Ver Código</a>
                                        <a href={project.deploy} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                    </div>
                                </article>
                            )
                        })
                }
            </section>
                </>
            :
            <div className='text-center w-1/2 m-auto py-20'>Carregando...</div>
            }
            
        </section>
        <AnimacaoProjects/>
        </>
    )
}