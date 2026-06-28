"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleFavorite, selectIsFavorite } from "@/redux/slices/productSlice";
import "./productCardWithLike.scss";

export default function ProductCardWithLike({ id, name, price, imgSrc, href }: Product) {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector(selectIsFavorite(id));

    const handleLike = (e: React.MouseEvent) => {
        e.preventDefault(); // don't follow the card link
        e.stopPropagation();
        dispatch(toggleFavorite(id));
    };

    return (
        <li className="product-card-with-like">
            <Link href={href}>
                <div className="image-wrapper">
                    <Image src={imgSrc} alt={name} width={416} height={480} />
                    <button
                        type="button"
                        className={`like-btn ${isFavorite ? "is-active" : ""}`}
                        aria-label="Add to wishlist"
                        aria-pressed={isFavorite}
                        onClick={handleLike}
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z" />
                        </svg>
                    </button>
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
