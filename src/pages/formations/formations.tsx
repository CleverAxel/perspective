import styles from "./formations.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Thumbnail from './thumbnail'
import { Link } from "react-router-dom";

export default function Formations(){
    return(
        <>
        <div>
            <section className={styles.mainContainer}>
                <Link to={"/"} className={styles.linkToDetails}>
                    <Thumbnail
                    imgURL="/assets/images/formations/multimedia.jpg"
                    title="Réalisation multimédia & création web"
                    description="Au travers du graphisme, de l’audiovisuel, de la photographie et du webdesign, apprenez à créer et maintenir un projet multimédia."
                    slogan="création et créativité"
                    ></Thumbnail>
                </Link>
                <Link to={"/"} className={styles.linkToDetails}>
                    <Thumbnail
                    imgURL="/assets/images/formations/radio.jpg"
                    title="(web)Radio & Community management"
                    description="Développez vos compétences en diction, en rédaction, en animation, en technique et dans bien d’autres domaines.."
                    slogan="Animez et maitrisez"
                    ></Thumbnail>
                </Link>
            </section>
        </div>
        </>
    )
}