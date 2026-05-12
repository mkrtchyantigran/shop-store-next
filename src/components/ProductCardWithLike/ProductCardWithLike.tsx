import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import "./productCardWithLike.scss";

export default function ProductCardWithLike({ name, price, imgSrc, href }: Product) {
    return (
        <li className="product-card-with-like">
            <Link href={href}>
                <div className="image-wrapper">
                    <Image src={imgSrc} alt={name} width={416} height={480} />
                    <button className="like-btn" aria-label="Add to wishlist">♡</button>
                </div>
                <div className="product-info">
                    <div className="info-top">
                        <h3>{name}</h3>
                        <div className="color-swatches">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                    <span className="price">${price}</span>
                </div>
            </Link>
        </li>
    );
}
