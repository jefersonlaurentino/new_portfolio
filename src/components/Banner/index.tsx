'use client'
import Image from 'next/image';
import './style.css';
import imagem from '../../assets/images/myPhoto.png';
import { FaArrowCircleDown, FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { RiNextjsLine } from 'react-icons/ri';
import Animacao from './animationBanner';

export default function Banner() {
    
    return(
        <>
        <section id='home'>
            <div className='banner'>
                <div>
                    <div className='info__banner'>
                        <h1>Olá, eu sou</h1>
                        <h2>Jeferson Laurentino</h2>
                        <p>Desenvolvedor Front-End criar interfaces modernas e responsivas.</p>
                        <div className='my__social__networks'>
                            <a href="https://www.linkedin.com/in/jefersonlaurentino" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                            <a href="https://github.com/jefersonlaurentino" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                        </div>
                        <button>Download CV</button>
                    </div>
                    <Image 
                        src={imagem}
                        alt='Uma Imagem minha'
                        />
                </div>
                <a href='#about__me' className='button__scroll'>
                    <FaArrowCircleDown/>
                </a>
                <div className='circle__info'>
                    <p>
                        <span><IoCodeSlashOutline/></span>
                        Web developer
                    </p>
                    <p>
                        <span><RiNextjsLine /></span>
                        Next.js
                    </p>
                    <p>
                        <span><FaReact/></span>
                        React.js
                    </p>
                </div>
            </div>
        </section>
        <Animacao/>
        </>
    )
}