import { FaArrowUp } from "react-icons/fa";
import './style.css'
import AnimacaoFooter from './animationFooter'

export default function Footer() {
    return(
        <>
        <footer>
            <div className="arrow__top">
                <a href="#home"><FaArrowUp/></a>
            </div>
            <div className="conteiner">
                <div className="redes">
                    <h4>Redes sociais</h4>
                    <ul className="redes__links">
                        <li><a href="https://www.linkedin.com/in/jefersonlaurentino" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                        <li><a href="https://github.com/jefersonlaurentino" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </ul>
                </div>
                <div className="info">
                    <h4>Informações Site</h4>
                    <p>Layout inspirado por Codehal - <a href="https://www.youtube.com/watch?v=h5I8LB4N5UA&t" target="_blank" rel="noopener noreferrer">Assista ao vídeo</a></p>
                    <p>Alguns ícones usados neste site são fornecidos por <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>.</p>
                </div>
            </div>

            <p>&copy;2025 - Criado por Jeferson Laurentino.</p>
        </footer>
        <AnimacaoFooter/>
        </>
    )
}