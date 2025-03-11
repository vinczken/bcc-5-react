import Button from '../button'
import HeaderIcon from '../../../../assets/headerIcon.png'
import './index.scss'

export default function Header(props) {
    return (
        <div className={`secao ${props.divClass}`}>
            <div className='tituSub'>
                <h1 className='titulo'>{props.titulo}</h1>
                <p className='subtitulo'>{props.subtitulo}</p>
            </div>

            <img src={HeaderIcon} height={68} width={68}/>

            <div className='botoes'>
                <Button className={`button ${props.buttonClass}`} onClick={props.onClick1} text={props.text1}/>
                <Button className={`button ${props.buttonClass}`} onClick={props.onClick2} text={props.text2}/>
            </div>
        </div>
    )
}