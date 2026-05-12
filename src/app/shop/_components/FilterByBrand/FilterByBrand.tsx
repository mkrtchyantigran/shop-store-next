import Link from 'next/link';
import Image from 'next/image';
import './filterByBrand.scss';

const brands = [
    { id: 1, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-1.svg", href: "/brand/brand" },
    { id: 2, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-2.svg", href: "/brand/brand" },
    { id: 3, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-3.svg", href: "/brand/brand" },
    { id: 4, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-4.svg", href: "/brand/brand" },
    { id: 5, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-5.svg", href: "/brand/brand" },
    { id: 6, logoSrc: "/icons/shop-categories/filter-brands-Icons/logo-6.svg", href: "/brand/brand" },
];

export default function FilterByBrand() {
    return (
        <div className="filter-by-brand">
            <h4>Filter by Brand</h4>
            <ul className="brands-list">
                {brands.map((brand) => (
                    <li key={brand.id} className="brand-item">
                        <Link href={brand.href}>
                            <Image src={brand.logoSrc} alt="brand" width={90} height={40} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
