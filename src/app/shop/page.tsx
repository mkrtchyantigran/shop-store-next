import ShopCategoriesBar from "./_components/ShopCategoriesBar/ShopCategoriesBar";
import FiltersSidebar from "./_components/FiltersSidebar/FiltersSidebar";
import Products from "./_components/Products/Products";
import "./shop.scss";

const benefits = [
    {
        iconSrc: "/icons/shop-page-icons/shop-icon-1.svg",
        title: "Secure Payments",
        description: "Feugiat mi gravida vestibulum orci ac volutpat non",
    },
    {
        iconSrc: "/icons/shop-page-icons/product-return.svg",
        title: "Return Within 14 Days",
        description: "Urna elementum eget quam facilisis vulputate",
    },
    {
        iconSrc: "/icons/shop-page-icons/24-icon.svg",
        title: "24/7 Support",
        description: "Semper turpis sed maecenas vivamus vel scelerisque",
    },
];

export default function Shop() {
    return (
        <>
            <ShopCategoriesBar />
            <div className="shop-layout">
                <FiltersSidebar />
                <Products />
            </div>
            <section className="shop-benefits">
                <div className="shop-benefits-inner">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="shop-benefit">
                            <img src={benefit.iconSrc} alt="" aria-hidden="true" />
                            <div className="shop-benefit-text">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
