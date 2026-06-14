"use client"

import ProductCardWithLike from "@/components/ProductCardWithLike/ProductCardWithLike";
import "./newProducts.scss";
import { useAppSelector as useSelector} from "@/redux/hooks";
import { selectProducts } from "@/redux/slices/productSlice";

export default function NewProducts() {
    
    const products = useSelector(selectProducts);
    const newProducts = products.slice(0, 3);

    return (
        <section className="new-products">
            <div className="container">
                <div className="header">
                    <h2>New Products</h2>
                    <nav>
                        <ul className="filter-links">
                            <li><button className="active">All</button></li>
                            <li><button>Chairs</button></li>
                            <li><button>Tables</button></li>
                            <li><button>Armchairs</button></li>
                            <li><button>Sofas</button></li>
                            <li><button>Decor</button></li>
                        </ul>
                    </nav>
                </div>

                <ul className="products-grid">
                    {newProducts.map((product) => (
                        <ProductCardWithLike key={product.id} {...product} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
