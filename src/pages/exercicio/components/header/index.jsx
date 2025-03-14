import Button from '../button'
import './index.scss'

export default function Header(props) {
    return (
        <div className={`secao ${props.divClass}`}>
            <div className='tituSub'>
                <h1 className='titulo'>{props.titulo}</h1>
                <p className='subtitulo'>{props.subtitulo}</p>
            </div>

            <img src={props.imgSrc} height={68} width={68}/>

            <div className='botoes'>
                <Button className={`headerBotao ${props.buttonClass}`} onClick={props.onClick1} text={props.textBtn1}/>
                <Button className={`headerBotao ${props.buttonClass}`} onClick={props.onClick2} text={props.textBtn2}/>
            </div>
        </div>
    )
}