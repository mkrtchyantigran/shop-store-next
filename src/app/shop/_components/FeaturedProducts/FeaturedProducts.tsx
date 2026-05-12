import Link from "next/link";
import ProductCardWithLike from "@/components/ProductCardWithLike/ProductCardWithLike";
import { products } from "@/data/products";
import "./featuredProducts.scss";

const featuredProducts = products.slice(0, 3);

export default function FeaturedProducts() {
    return (
        <section className="featured-products">
            <div className="container">
                <div className="title-and-button">
                    <h2>Featured Products</h2>
                    <Link href="/shop">View all</Link>
                </div>
                <ul className="products-grid">
                    {featuredProducts.map((product) => (
                        <ProductCardWithLike key={product.id} {...product} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
