import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <section className={styles.sponsor}>
                <div>
                    <div className={styles.containImg}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/wallonie.png"} alt="Région wallone" />
                    </div>
                    <div className={styles.containImg}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/flemalle.png"} alt="Ville de Flémalle" />
                    </div>
                    <div className={styles.containImg}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/cisp.jpg"} alt="CISP" />
                    </div>
                    <div className={styles.containImg}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/europe.png"} alt="Union Européenne" />
                    </div>
                    <div className={styles.containImg}>
                        <img src={process.env.PUBLIC_URL+"/assets/images/forem.png"} alt="Le Forem" />
                    </div>
                </div>
            </section>
        </footer>
    )
}