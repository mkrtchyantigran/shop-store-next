'use client';

import { useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data/products";
import "./products.scss";

const PAGE_SIZE = 6;

function Products() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const visibleProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

    const from = products.length === 0 ? 0 : startIndex + 1;
    const to = startIndex + visibleProducts.length;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const isLast = currentPage >= totalPages;

    return (
        <section className="products_shop">
            <div className="result_filters">
                <p>Showing {from}-{to} of {products.length} results</p>
                <select className="sort-categories">
                    <option value="all">Sort by latest</option>
                </select>
            </div>
            <ul className="products-grid">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </ul>
            {totalPages > 1 && (
                <div className="pagination">
                    <ul className="pagination-pages">
                        {pages.map((page) => (
                            <li key={page}>
                                <button
                                    type="button"
                                    className={`pagination-page ${page === currentPage ? 'is-active' : ''}`}
                                    onClick={() => setCurrentPage(page)}
                                    aria-current={page === currentPage ? 'page' : undefined}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="pagination-next"
                        onClick={() => !isLast && setCurrentPage(currentPage + 1)}
                        disabled={isLast}
                    >
                        Next
                        <img src="/icons/shop-page-icons/arrow .svg" alt="" aria-hidden="true" />
                    </button>
                </div>
            )}
        </section>
    );
}

export default Products;
