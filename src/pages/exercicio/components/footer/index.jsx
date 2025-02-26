import { useEffect, useState } from "react";
import "./index.scss";

export default function Footer(props){

    const [date, setDate] = useState(new Date().toString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toString());
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return(

            <div className={`secao-foot ${props.divClass}`}>
                <h1>{date}</h1>
            </div>
    )
}