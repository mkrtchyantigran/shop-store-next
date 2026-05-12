import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import "./productCard.scss";

export default function ProductCard({ name, price, oldPrice, badge, imgSrc, href }: Product) {
    return (
        <li className="product-card">
            <Link href={href}>
                <div className="image-wrapper">
                    {badge && (
                        <span className={`badge ${badge.toLowerCase()}`}>{badge}</span>
                    )}
                    <Image src={imgSrc} alt={name} width={306} height={350} />
                </div>
                <div className="product-info">
                    <h3>{name}</h3>
                    <div className="price-row">
                        {oldPrice && <span className="old-price-row">${oldPrice}</span>}
                        <span className="price">${price}</span>
                    </div>
                    <div className="color-swatches">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
