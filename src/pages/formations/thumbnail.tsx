import { Link } from "react-router-dom";
import styles from "./thumbnail.module.css";

export default function Thumbnail(props:IPropsThumbnail){
    return(
        <div className={styles.thumbnail}>
            <div className={styles.imgAndDescription}>
                <div className={styles.imgContainer}>
                    <img src={process.env.PUBLIC_URL+props.imgURL} alt="multimédia" />
                </div>

                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div>
                            <p className={styles.slogan}>{props.slogan}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface IPropsThumbnail{
    imgURL:string;
    title:string;
    description:string;
    slogan:string;
}