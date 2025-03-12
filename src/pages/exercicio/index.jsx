import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import HeaderIconW from "../../assets/headerIconW.png"
import HeaderIconB from "../../assets/headerIconB.png"
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
                    <Header titulo='React para Dispositivos Móveis' subtitulo='Projeto feito por Caio Xavier da Silva' 
                    divClass={`${temaEscuro ? 'escuro' : 'claro'}`} 
                    buttonClass={temaEscuro ? 'bt-escuro' : 'bt-claro'} 
                    imgSrc={temaEscuro ? HeaderIconB : HeaderIconW}
                    text1='Incrementar' 
                    text2='Resetar' />
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