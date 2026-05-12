export type Product = {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    badge?: "SALE" | "NEW";
    imgSrc: string;
    href: string;
};

export const products: Product[] = [
    { id: 1, name: "Modern Chair", price: 250, imgSrc: "/images/shop-categories-images/category-chair.jpg", href: "/shop/1" },
    { id: 2, name: "Folding Table", price: 250, badge: "SALE", imgSrc: "/images/shop-categories-images/category-table.jpg", href: "/shop/2" },
    { id: 3, name: "Classic Armchair", price: 250, imgSrc: "/images/shop-categories-images/category-armchair.jpg", href: "/shop/3" },
    { id: 4, name: "Papasan Chair", price: 250, imgSrc: "/images/new-products/egg-chair.jpg", href: "/shop/4" },
    { id: 5, name: "Modern Chair", price: 250, imgSrc: "/images/new-products/modern-armchair.jpg", href: "/shop/5" },
    { id: 6, name: "Coffee Table", price: 250, imgSrc: "/images/new-products/chaise-lounge.jpg", href: "/shop/6" },
    { id: 7, name: "Modern Chair", price: 250, imgSrc: "/images/shop-categories-images/category-table.jpg", href: "/shop/7" },
    { id: 8, name: "Coffee Table", price: 200, oldPrice: 250, badge: "NEW", imgSrc: "/images/shop-categories-images/category-table.jpg", href: "/shop/8" },
    { id: 9, name: "Folding Table", price: 250, badge: "SALE", imgSrc: "/images/shop-categories-images/category-table.jpg", href: "/shop/2" },
    { id: 10, name: "Classic Armchair", price: 250, imgSrc: "/images/shop-categories-images/category-armchair.jpg", href: "/shop/3" },
    { id: 11, name: "Papasan Chair", price: 250, imgSrc: "/images/new-products/egg-chair.jpg", href: "/shop/4" },
    { id: 12, name: "Modern Chair", price: 250, imgSrc: "/images/new-products/modern-armchair.jpg", href: "/shop/5" },
];
