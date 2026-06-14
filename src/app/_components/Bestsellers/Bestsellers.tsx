import Link from "next/link";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import "./bestsellers.scss";

const PRODUCTS_SIZE = 8;

export default function Bestsellers() {
    return (
        <section className="bestsellers">
            <div className="container">
                <div className="title-and-button">
                    <h2>Bestsellers</h2>
                    <Link href="/">View all</Link>
                </div>
                <ul className="products-grid">
                    {products.slice(0, PRODUCTS_SIZE).map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
