import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "@/assets/logo/mrsam-logo.svg";

function Header() {

    useEffect(() => {
    }, []);



    return(      
        <header className={styles.header}>  
            <div>
                <Link href="/"><Image src={Logo} alt="Logo van Mr. Sam"/></Link>
                <ul>
                    <li><button id="bookTableBtn">Book a table</button></li>
                    <li><button id="hamburgerBtn">H</button></li>
                </ul>
            </div>
        </header>
    )
}
  
export default Header;