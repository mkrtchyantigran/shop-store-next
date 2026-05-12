

import Link from 'next/link';
import './shopCategoriesBar.scss'

const categories = [
    { id: 1, name: "Armchairs", count: 124, iconSrc: "/icons/shop-categories/armchair.svg", href: "/shop/armchairs" },
    { id: 2, name: "Cabinets", count: 20, iconSrc: "/icons/shop-categories/cabinet.svg", href: "/shop/cabinets" },
    { id: 3, name: "Sofas", count: 42, iconSrc: "/icons/shop-categories/sofa.svg", href: "/shop/sofas" },
    { id: 4, name: "Chairs", count: 120, iconSrc: "/icons/shop-categories/chair.svg", href: "/shop/chairs" },
    { id: 5, name: "Decor", count: 299, iconSrc: "/icons/shop-categories/decor.svg", href: "/shop/decor" },
];

export default function ShopCategoriesBar() {
    return (
        <section className='shop-categories-bar'>
            <div className='container'>
                <ul className='categories-list'>
                    {
                        categories.map((category) => (
                            <li key={category.id} className='category-item'>
                                <Link href={category.href}>
                                    <img src={category.iconSrc} alt={category.name} />
                                    <div className='category-info'>
                                        <h3>{category.name}</h3>
                                        <span>{category.count} products</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
