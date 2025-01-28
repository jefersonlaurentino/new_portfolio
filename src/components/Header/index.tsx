'use client'

import { IoClose, IoMenu } from 'react-icons/io5';
import './style.css';
import { useEffect, useState } from 'react';
import { Switch } from '../ui/switch';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiSun } from 'react-icons/ci';
import { gsap } from 'gsap';

export default function Header() {
    const [ darkMode , setDarkMode ] = useState<boolean>(false)

    // verifica só na primeira ver se o switch do modo dark deve receber a posição de dark ou não
    useEffect(()=>{
        const theme = localStorage.getItem('themeMode');

        if (theme === null || (matchMedia('(prefers-color-scheme: dark)').matches && theme === 'dark')) {
            setDarkMode(true)
            return;
        }
        setDarkMode(false)
    },[])

    // chama a funçáo de setThemeMode
    useEffect(()=>{
        if (darkMode) {
            setThemeMode('dark')
        } else {
            setThemeMode('light')
        }
    },[darkMode])

    // função para setar o attributo do tema no DOM
    const setThemeMode = (themeMode: string) =>{
        const html = document.querySelector('html');
        
        html?.setAttribute('data-mode', themeMode);
        localStorage.setItem('themeMode', themeMode);
    }

    useEffect(()=>{
        gsap.to('.header__scroll', {
                scrollTrigger: {
                    trigger: '.info__banner',
                    start: '20px 50px',
                    toggleActions: 'play none none reverse'
                },
                onStart: () =>{
                    document.querySelector('.header__scroll')?.classList.toggle('scroll__page')
                },
                onReverseComplete: ()=>{
                    document.querySelector('.header__scroll')?.classList.toggle('scroll__page')
                }
            })
    },[])

    const menuOpen = () =>{
        
        document.querySelector('nav')?.classList.toggle('open__nav')
        document.querySelector('nav')?.classList.toggle('close__nav')
    }
    
    const closeMenu = () =>{
        const nav = document.querySelector('nav')?.classList.contains('close__nav')
        
        if (!nav) {
            document.querySelector('nav')?.classList.toggle('close__nav')
            document.querySelector('nav')?.classList.toggle('open__nav')
        }
    }
    
    useEffect(()=>{
        const links = [...document.querySelectorAll('.content__nav a')]
        links.forEach((elem)=>elem.addEventListener('click', ()=>closeMenu()))
    },[])
    
    return(
        <>
        <header>
            <section className='header__scroll'>
                <a href="#home">
                    <h2>{'< '}Jeferson{' />'}</h2>
                </a>
                <div className='content__nav'>
                    <nav className='close__nav'>
                        <button 
                            className='close'
                            aria-label='Fechar menu'
                            onClick={menuOpen}
                        >
                            <IoClose/>
                        </button>

                        <ul>
                            <li>
                                <a id='about__link' href="#about__me">Sobre Mim</a>
                            </li>
                            <li>
                                <a id='projects__link' href="#projects">Projetos</a>
                            </li>
                            <li>
                                <a id='skills__link' href="#skills">Habilidades</a>
                            </li>
                            <li>
                                <a id='contact__link' href="#contact">Contato</a>
                            </li>
                        </ul>
                        <div className='nav__bar'>
                            <div className='bar'></div>
                        </div>
                    </nav>
                    <div className='switch__theme'>
                        <CiSun />
                        <Switch 
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                        />
                        <MdOutlineDarkMode />
                    </div>
                    <button 
                        className='menu' 
                        aria-label='Menu'
                        onClick={menuOpen}
                    >
                        <IoMenu/>
                    </button>
                </div>
            </section>
        </header>
        </>
    )
}