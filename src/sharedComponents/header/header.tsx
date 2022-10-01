import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";
export default function Header(){
    return (
        <header className={styles.header}>
            <div>
                <div className={styles.logoContainer}>
                    <Link to={"/"}>
                    <img src={process.env.PUBLIC_URL+"/assets/images/logo.png"} alt="" />
                    </Link>
                </div>

                <Navbar></Navbar>
            </div>
        </header>
    )
}