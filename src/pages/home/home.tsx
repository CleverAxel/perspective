import { Link } from "react-router-dom";
import WaveDivider from "../../sharedComponents/waveDivider/waveDivider";
import styles from "./home.module.css";
export default function Home(){
    return(
        <>
        <section className={styles.section}>

            <div className={styles.welcomeTitle}>
                <div className={styles.title}>
                    <h1>Centre de formation pour adultes</h1>
                    <h3>Chercher seul(e)... ou réussir ensemble ?</h3>
                </div>


                <div className={styles.bannerContainer}>
                    <img src={process.env.PUBLIC_URL+"/assets/images/perspectivebanner.png"} alt="" />
                </div>
            </div>

        </section>
        <WaveDivider></WaveDivider>

        <section className={styles.section}>
            <div className={styles.descriptionHomePage}>
                <p>Intéressé(e)s par une formation gratuite dans le domaine du web, de la radio, de l’informatique, de la régie de spectacle ? Vous souhaitez ré-orienter votre carrière ? Vous postulez mais toutes vos réponses sont négatives ? Perspectives peut vous aider.</p>
                <p>Nous sommes un centre d’insertion socio professionnelle actif depuis plus de 30 ans basé à Flémalle. Nos formations reconnues par le FOREM sont destinées aux demandeurs d’emploi. Des centaines de stagiaires sont déjà passés par nos formations. Inscrivez-vous sans engagement et participez à nos séances d’informations.</p>
            </div>

            <div className={styles.containerLinkToFormations}>
                <Link to="/formations">
                    <button className={styles.buttonToFormation}>Découvrez nos formations</button>
                </Link>
            </div>
        </section>
        </>
    )
}