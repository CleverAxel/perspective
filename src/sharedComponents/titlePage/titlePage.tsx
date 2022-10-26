import styles from "./titlePage.module.css";
export default function TitlePage(props:{title:string}){
    return(
        <div className={styles.containerTitle}>
            <h2>{props.title}</h2>
        </div>
    )
}