import Image from "next/image";
import myImagem from '../../assets/images/20250115_145222.png';
import './style.css'
import AnimacaoAbout from "./animationAbout";

export default function SobreMim() {
    return(
        <>
        <section id="about__me" className="sobre__mim">
            <article>
                <div className="div__my__imagem">
                    <Image
                        src={myImagem}
                        alt="Uma imagem minha"
                        className="w-1/2"
                    />
                </div>
                <div className="my__info">
                    <h2>Sobre Mim</h2>
                    <p>Minha jornada na programação começou há cerca de dois anos, durante os quais me dediquei a aprender e criar projetos pessoais utilizando React, TypeScript, Tailwind CSS e outras ferramentas modernas. Esses projetos me ajudaram a desenvolver habilidades práticas e entender a importância de combinar design e funcionalidade. Antes de entrar no mundo da tecnologia, trabalhei como mecânico autônomo, o que me ensinou a resolver problemas de forma criativa e a atender bem os clientes — habilidades que trago para o universo da programação. Fique à vontade para explorar meu portfólio e conhecer mais sobre meu trabalho.
                    </p>
                </div>
            </article>
        </section>
        <AnimacaoAbout/>
        </>
    )
}