"use client";

import React from "react";
import Image from "next/image";
import styles from "./search-bar.module.css";
import searchIcon from "/public/mag-glass.svg";
import closeIcon from "/public/close-icon.svg";

interface SearchPosition {
    top: string | number;
}

export default function SearchBar({ top }: SearchPosition) {
    return (
        <div className={`search-bar w-screen h-auto absolute left-0 ${styles.searchBar}`} style={{ top }} aria-hidden="true">
            <div className="bar-content w-full h-auto flex flex-row items-center py-3 px-2">
                <div className="searchIcon h-auto w-auto px-3">
                    <Image src={searchIcon} alt="search icon" width={40} height={40} />
                </div>
                <div className="bar w-full h-auto">
                    <input type="search" autoComplete="off" autoCapitalize="off" autoCorrect="off" placeholder="Search" autoFocus className="w-full uppercase text-30 px-3 py-1 outline-none text-white" />
                </div>
                <div className="closeIcon w-auto h-auto px-3">
                    <Image src={closeIcon} alt="close icon" width={30} height={30} />
                </div>
            </div>
        </div>
    );
}