import Image from "next/image";
import './style.css'
import AnimacaoAbout from "./animationAbout";

export default function SobreMim() {
    return(
        <>
        <section id="about__me" className="sobre__mim">
            <article>
                <div className="div__my__imagem">
                    <Image
                        src={'/images/imagens_site/my_photo_with_background.png'}
                        alt="Uma imagem minha"
                        priority
                        height={200}
                        width={200}
                        className="w-1/2"
                    />
                </div>
                <div className="my__info">
                    <h2>Sobre Mim</h2>
                    <p>Minha jornada na programação começou há cerca de dois anos, durante os quais me dediquei a aprender e criar projetos pessoais utilizando React, TypeScript, Tailwind CSS e outras ferramentas modernas. Esses projetos me ajudaram a desenvolver habilidades práticas e a entender a importância de combinar design e funcionalidade. Antes de entrar no mundo da tecnologia, trabalhei como mecânico, o que me ensinou a resolver problemas complexos de forma criativa — habilidades que trago para a área da programação. Fique à vontade para explorar meu portfólio e conhecer mais sobre meu trabalho.
                    </p>
                </div>
            </article>
        </section>
        <AnimacaoAbout />
        </>
    )
}