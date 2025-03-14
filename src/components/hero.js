import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.css";

function Hero() {

    useEffect(() => {
    }, []);



    return(      
        <div className={styles.hero}>  
            <div>
                <section>
                    <h1>Contemporary Japanese<br/> kitchen & bar</h1>
                    <Link href="/menu">View Menu</Link>
                </section>
            </div>
        </div>
    )
}
  
export default Hero;