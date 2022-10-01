import { useEffect, useRef } from "react";
import styles from "./accordion.module.css";

export default function Accordion(props:IPropsAccordion):JSX.Element{
    const content = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("resize", resizeMaxHeight);

        return () => {
            window.removeEventListener("resize", resizeMaxHeight);
        }
    }, [])

    const resizeMaxHeight = () => {
        if(content.current?.style.maxHeight){
            content.current.style.maxHeight = content.current.scrollHeight + "px";
        }
    }

    const toggleContent = () => {
        if(content.current?.style.maxHeight){
            content.current.style.maxHeight = "";
        }else{
            if(content.current){
                content.current.style.maxHeight = content.current.scrollHeight + "px";
            }
        }
    }

    return(
        <div className={props.className}>
            <div onClick={() => {toggleContent()}}>
                {props.button}
            </div>

            <div ref={content} className={styles.content} style={{transition:"max-height "+props.transitionInMs+"ms ease-out"}}>
                {props.content}
            </div>
        </div>
    );
}


interface IPropsAccordion{
    className?:string;
    button:JSX.Element;
    content:JSX.Element;
    transitionInMs:number;
    children?:any;
}