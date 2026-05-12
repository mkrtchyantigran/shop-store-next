import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import "./products.scss";

function Products() {
    return (
        <section className="products_shop">
            <div className="result_filters">
                <p>Showing 1-12 of 14results</p>
                <select className="sort-categories">
                    <option value="all">Sort by latest</option>
                </select>
            </div>
            <ul className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </ul>
        </section>
    );
}

export default Products;
