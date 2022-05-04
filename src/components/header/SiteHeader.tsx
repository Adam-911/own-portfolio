import React from "react";
import './SiteHeader.scss';

export default function SiteHeader() {
    return (
        <header className="site-header">
            <div className="site-header__logo">
                <span>MAX PAYNE</span>
                <div className="site-header__logo__line"></div>
            </div>
            <ul>
                <li>
                    <span>Projects</span>
                </li>
                <li>
                    <span>About</span>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </header>
    );
}