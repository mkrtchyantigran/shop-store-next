import ShopCategoriesBar from "./_components/ShopCategoriesBar/ShopCategoriesBar";
import FiltersSidebar from "./_components/FiltersSidebar/FiltersSidebar";
import Products from "./_components/Products/Products";
import "./shop.scss";

export default function Shop() {
    return (
        <>
            <ShopCategoriesBar />
            <div className="shop-layout">
                <FiltersSidebar />
                <Products />
            </div>
        </>
    );
}
