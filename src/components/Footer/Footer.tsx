import Link from "next/link";
import './footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="newsletter">
                    <div className="newsletter-text">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Don't miss latest news & promotions</p>
                    </div>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="footer-columns">
                    <div className="store-info">
                        <div className="logo">
                            <img src="/icons/home_icon.svg" alt="f Store" />
                            <h4>f Store</h4>
                        </div>
                        <p>60 Fremont Ave. Hamden, CT 06514</p>
                        <p>Email: fStore@email.com</p>
                        <p>Phone: (928) 630-9272</p>
                        <ul className="socials">
                            <li>
                                <Link href="/">
                                    <img src="/icons/footer-icons/Facebook_black.svg" alt="Facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <img src="/icons/footer-icons/Frame90.svg" alt="Twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <img src="/icons/footer-icons/Instagram_black.svg" alt="Instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <img src="/icons/footer-icons/Youtube_black.svg" alt="YouTube" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='shop-column footer-column'>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/">Chairs</Link></li>
                            <li><Link href="/">Beds</Link></li>
                            <li><Link href="/">Sofas</Link></li>
                            <li><Link href="/">Cabinets</Link></li>
                            <li><Link href="/">Armchairs</Link></li>
                            <li><Link href="/">Sale</Link></li>
                        </ul>
                    </div>
                    <div className='customer-service-column footer-column'>
                        <h4>Customer service</h4>
                        <ul>
                            <li><Link href="/">Orders</Link></li>
                            <li><Link href="/">Addresses</Link></li>
                            <li><Link href="/">Returns</Link></li>
                            <li><Link href="/">Account details</Link></li>
                            <li><Link href="/">F.A.Q</Link></li>
                        </ul>
                    </div>
                    <div className='delivery-column footer-column'>
                        <h4>Delivery</h4>
                        <ul>
                            <li><Link href="/">Orders</Link></li>
                            <li><Link href="/">Return</Link></li>
                            <li><Link href="/">Free Delivery</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-and-payments">
                    <p>© Copyright f Store 2024. Design by Figma.guru</p>
                    <div className="payments">
                       <img src="/icons/footer-icons/payments_icons.svg" alt="Accepted payments: Visa, American Express, Mastercard, PayPal" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
