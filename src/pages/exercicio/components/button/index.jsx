import "./index.scss"

export default function Button(props){

    return (
        <button className={`botao ${props.className}`} onClick={props.onClick} >{props.text || "BOTAO"}</button>
    )
}