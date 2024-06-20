import React from "react";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="NextLevel Food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
