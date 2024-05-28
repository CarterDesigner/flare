"use client";

import React, { ReactNode, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import "../../scripts/dropbtn";
import "../../hamburger-button.css";
import Logo1 from "../../../public/logo-full (white).png";
import basketIcon from "../../../public/shopping-bag.svg";
import searchIcon from "/public/mag-glass.svg";
import { HamburgerBtn } from "../../scripts/dropbtn";
import { SearchBarScript } from "../../scripts/searchBarBtn";
import SearchBar from "../search-bar/page";

interface NavGroupProps {
    children: ReactNode;
}

function NavGroup({ children }: NavGroupProps) {
    return (
        <div className="nav-group w-auto h-full flex flex-row items-center">
            {children}
        </div>
    );
}
function DropBtn() {
    return (
        <div className="hamburger hamburger--spin">
            <div className="hamburger-box">
                <div className="hamburger-inner"></div>
            </div>
        </div>
    );
}

interface NavigationTopProp {
    top: string | number;
}

export default function Navigation({ top }: NavigationTopProp) {
    useEffect(() => {
        const cleanupHamburgerbtn = HamburgerBtn();
        const cleanupSearchBarBtn = SearchBarScript();
        return () => {
            if (cleanupHamburgerbtn) cleanupHamburgerbtn();
            if (cleanupSearchBarBtn) cleanupSearchBarBtn();
        };
    }, []);
    return (
        <div className={`navigation w-screen h-75px absolute left-0 ${styles.navigation}`} style={{ top }}>
            <SearchBar top="100%" />
            <div className={`navigation-container w-full h-full flex flex-row justify-between px-5 overflow-hidden ${styles.navigationContainer}`}>
                <NavGroup>
                    <DropBtn />
                </NavGroup>
                <NavGroup>
                    <div className="logo w-auto h-full flex items-center">
                        <Link href="/">
                            <Image src={Logo1} alt="Flare Logo to Home" height={150} width={150} />
                       </Link>
                    </div>
                </NavGroup>
                <NavGroup>
                    <div className="search-icon w-auto h-full flex items-center cursor-pointer">
                        <Image src={searchIcon} alt="search icon" height={30} width={40} />
                    </div>
                    <div className="basket-icon w-auto h-full flex items-center ml-3">
                        <Link href="/checkouts/basket">
                            <Image src={basketIcon} alt="basket button" height={30} width={30} />
                        </Link>
                    </div>
                </NavGroup>
            </div>
        </div>
    );
}