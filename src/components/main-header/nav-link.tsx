"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./nav-link.module.css";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${style.nav} ${style.active}`
                    : `${style.nav}`
            }
        >
            {children}
        </Link>
    );
};

export default NavLink;
