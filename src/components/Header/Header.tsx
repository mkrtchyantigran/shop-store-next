'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";

export default function Header() {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <header className="header">

            <div className="main-container">

                <div className="_promotion-bar">
                    <span>THIS WEEKEND SALE 20% OFF ON ALL PRODUCTS</span>
                </div>

                <div className="second-bar">

                    <div className="container">
                        <div className="address-box">
                            <p>60 Fremont Ave. Hamden, CT 06514</p>
                        </div>

                        <div className="search-box">

                            <select className="search-category">
                                <option value="all">All Categories</option>
                            </select>

                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                />
                                <span className="search-icon">
                                    <img src="/icons/search.svg" alt="search icon" />
                                </span>
                            </div>

                        </div>

                        <div className="contact-box">
                            <img src="/icons/phone.svg" alt="phone icon" />
                            <p>(928) 630-9272</p>
                        </div>

                    </div>
                </div>

                <nav>

                    <Link href="/">
                        <img className="nav-logo" src="/icons/nav-icon.svg" alt="navigation icon" />
                    </Link>

                    <ul className="nav-links">
                        <li className={isActive("/") ? "active" : ""}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={isActive("/shop") ? "active" : ""}>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className={isActive("/about-us") ? "active" : ""}>
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className={isActive("/contact-us") ? "active" : ""}>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="right_side">
                        <ul>
                            <li>
                                <Link href="/login">
                                    <img src="/icons/login-icon.svg" alt="login icon" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/wishlist">
                                    <img src="/icons/heart-icon.svg" alt="heart icon" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart">
                                    <img src="/icons/shop-icon.svg" alt="shop icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>

        </header>
    );
}
