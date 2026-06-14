export type ProductCategory =
    | "Sofas"
    | "Armchairs"
    | "Chairs"
    | "Cabinets"
    | "Decor";

export type Product = {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    badge?: "SALE" | "NEW";
    category: ProductCategory;
    imgSrc: string;
    href: string;
};

export const products: Product[] = [
    // Sofas
    { id: 1, name: "Emerald Velvet Sofa", price: 1290, badge: "NEW", category: "Sofas", imgSrc: "/images/shop/sofas/green-velvet-sofa.jpg", href: "/shop/1" },
    { id: 2, name: "Hampton Tufted Sofa", price: 980, category: "Sofas", imgSrc: "/images/shop/sofas/grey-tufted-sofa.jpg", href: "/shop/2" },
    { id: 3, name: "Rust 3-Seater Sofa", price: 890, oldPrice: 1050, badge: "SALE", category: "Sofas", imgSrc: "/images/shop/sofas/rust-fabric-sofa.jpg", href: "/shop/3" },
    { id: 4, name: "Cognac Leather Sofa", price: 1490, category: "Sofas", imgSrc: "/images/shop/sofas/tan-leather-sofa.jpg", href: "/shop/4" },
    { id: 5, name: "Sunny Yellow Loveseat", price: 640, category: "Sofas", imgSrc: "/images/shop/sofas/yellow-loveseat.jpg", href: "/shop/5" },
    { id: 6, name: "Nordic Linen Sofa", price: 1120, category: "Sofas", imgSrc: "/images/shop/sofas/grey-linen-sofa.jpg", href: "/shop/6" },

    // Armchairs
    { id: 7, name: "Mustard Lounge Armchair", price: 420, badge: "NEW", category: "Armchairs", imgSrc: "/images/shop/armchairs/mustard-armchair.jpg", href: "/shop/7" },
    { id: 8, name: "Pearl Tufted Armchair", price: 510, category: "Armchairs", imgSrc: "/images/shop/armchairs/white-tufted-armchair.jpg", href: "/shop/8" },
    { id: 9, name: "Scandi Shell Lounge Chair", price: 380, category: "Armchairs", imgSrc: "/images/shop/armchairs/scandi-lounge-chair.jpg", href: "/shop/9" },
    { id: 10, name: "Reading Wing Armchair", price: 460, oldPrice: 560, badge: "SALE", category: "Armchairs", imgSrc: "/images/shop/armchairs/yellow-reading-armchair.jpg", href: "/shop/10" },
    { id: 11, name: "Cocoon Cozy Armchair", price: 540, category: "Armchairs", imgSrc: "/images/shop/armchairs/grey-cozy-armchair.jpg", href: "/shop/11" },
    { id: 12, name: "Pop Accent Armchair", price: 290, category: "Armchairs", imgSrc: "/images/shop/armchairs/orange-accent-armchair.jpg", href: "/shop/12" },

    // Chairs
    { id: 13, name: "Oslo Dining Chair", price: 150, category: "Chairs", imgSrc: "/images/shop/chairs/black-dining-chair.jpg", href: "/shop/13" },
    { id: 14, name: "Loft Bar Stool", price: 180, badge: "NEW", category: "Chairs", imgSrc: "/images/shop/chairs/black-bar-stool.jpg", href: "/shop/14" },
    { id: 15, name: "Citrus Side Chair", price: 120, oldPrice: 160, badge: "SALE", category: "Chairs", imgSrc: "/images/shop/chairs/yellow-side-chair.jpg", href: "/shop/15" },
    { id: 16, name: "Eames-Style Chair", price: 140, category: "Chairs", imgSrc: "/images/shop/chairs/white-eames-chair.jpg", href: "/shop/16" },
    { id: 17, name: "Birch Wooden Stool", price: 95, category: "Chairs", imgSrc: "/images/shop/chairs/white-wooden-stool.jpg", href: "/shop/17" },
    { id: 18, name: "Soft Grey Dining Chair", price: 165, category: "Chairs", imgSrc: "/images/shop/chairs/grey-upholstered-chair.jpg", href: "/shop/18" },

    // Cabinets
    { id: 19, name: "Oakwood Wall Cabinet", price: 340, category: "Cabinets", imgSrc: "/images/shop/cabinets/wooden-wall-cabinet.jpg", href: "/shop/19" },
    { id: 20, name: "Mid-Century Console", price: 620, badge: "NEW", category: "Cabinets", imgSrc: "/images/shop/cabinets/wooden-console-cabinet.jpg", href: "/shop/20" },
    { id: 21, name: "Classic Wardrobe", price: 950, oldPrice: 1150, badge: "SALE", category: "Cabinets", imgSrc: "/images/shop/cabinets/wooden-wardrobe.jpg", href: "/shop/21" },
    { id: 22, name: "Oak Side Cabinet", price: 410, category: "Cabinets", imgSrc: "/images/shop/cabinets/oak-side-cabinet.jpg", href: "/shop/22" },
    { id: 23, name: "Library Bookshelf", price: 780, category: "Cabinets", imgSrc: "/images/shop/cabinets/library-bookshelf.jpg", href: "/shop/23" },
    { id: 24, name: "Modular Shelving Unit", price: 520, category: "Cabinets", imgSrc: "/images/shop/cabinets/wall-shelving-unit.jpg", href: "/shop/24" },

    // Decor
    { id: 25, name: "Ceramic Vase Set", price: 75, badge: "NEW", category: "Decor", imgSrc: "/images/shop/decor/ceramic-vases.jpg", href: "/shop/25" },
    { id: 26, name: "Persian Area Rug", price: 260, oldPrice: 320, badge: "SALE", category: "Decor", imgSrc: "/images/shop/decor/patterned-area-rug.jpg", href: "/shop/26" },
    { id: 27, name: "Pampas & Print Set", price: 90, category: "Decor", imgSrc: "/images/shop/decor/pampas-vase-set.jpg", href: "/shop/27" },
    { id: 28, name: "Bedside Clock Decor", price: 110, category: "Decor", imgSrc: "/images/shop/decor/table-clock-decor.jpg", href: "/shop/28" },
    { id: 29, name: "Rattan Lantern Duo", price: 130, category: "Decor", imgSrc: "/images/shop/decor/rattan-lanterns.jpg", href: "/shop/29" },
    { id: 30, name: "Framed Wall Art Set", price: 145, category: "Decor", imgSrc: "/images/shop/decor/framed-wall-art.jpg", href: "/shop/30" },
];
