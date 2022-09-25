import Navbar from "../navbar/navbar";
import styles from "./header.module.css";
export default function Header(){
    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logoContainer}>
                    <img src={process.env.PUBLIC_URL+"/assets/images/logo.png"} alt="" />
                </div>

                <Navbar></Navbar>

            </div>
        </header>
    )
}