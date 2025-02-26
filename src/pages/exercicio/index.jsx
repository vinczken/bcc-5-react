import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import "./index.scss"
import { useState } from "react";

export default function Exercicio() {
    const [temaEscuro, setTemaEscuro] = useState(true)
    const [exibido, setExibido] = useState(true);
    const [counter, setCounter] = useState(0);

    const mudarTema = () => {
        setTemaEscuro(!temaEscuro);
    }

    const esconderHeader = () => {
        setExibido(!exibido);
    }


    return (
        <div className="pai">
            {
                exibido ? (
                    <Header titulo='Header' subtitulo='subtitles' 
                    divClass={`header ${temaEscuro ? 'escuro' : 'claro'}`} 
                    buttonClass={temaEscuro ? 'bt-escuro' : 'bt-claro'} t
                    ext1='Incrementar' 
                    text2='Resetar' 
                    text3='Decrementar' />
                ) : (
                    <div></div>
                )
            }

            <div className="main">
                <Button className={temaEscuro ? 'bt-escuro' : 'bt-claro'} text='Mudar Tema' onClick={mudarTema} />
                <Button className={temaEscuro ? 'bt-escuro' : 'bt-claro'} text='Esconder Header' onClick={esconderHeader} />
            </div>
            <Footer divClass={temaEscuro ? 'escuro' : 'claro'} />
        </div>
    )
}