"use client";

import React from "react";
import "./adbar-top.css";

export default function AdbarTop() {
    return (
        <div className="adbar w-screen h-50px absolute top-0 left-0">
            <div className="adbar-content w-full h-full flex items-center justify-center px-10">
                <span className="uppercase text-white">welcome to flare apparel</span>
            </div>
        </div>
    )
}