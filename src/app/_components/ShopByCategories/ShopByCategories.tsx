import Link from "next/link";
import Image from "next/image";
import './shopByCategories.scss';

export default function ShopByCategories() {
    return (
        <section className='shopByCategories'>
            <div className="container">

                <div className="title-and-button">
                    <h2 className='title'>Shop by Categories</h2>
                    <button className="btn buttonViewAll">View All</button>
                </div>

                <ul className="categories-list">
                        <li className="category-card">
                            <Link href="/">
                                <div className='image-wrapper'>
                                    <Image src="/images/shop-categories-images/category-chair.jpg" alt="chair" fill sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                         <li className="category-card">
                            <Link href="/">
                                <div className='image-wrapper'>
                                    <Image src="/images/shop-categories-images/category-table.jpg" alt="table" fill sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                                <div className="category-info">
                                    <h3>Tables</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                         <li className="category-card">
                            <Link href="/">
                                <div className='image-wrapper'>
                                    <Image src="/images/shop-categories-images/category-armchair.jpg" alt="armchair" fill sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                                <div className="category-info">
                                    <h3>Armchairs</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                        <li className="category-card">
                            <Link href="/">
                                <div className='image-wrapper'>
                                    <Image src="/images/shop-categories-images/category-sofa.jpg" alt="sofa" fill sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                                <div className="category-info">
                                    <h3>Sofas</h3>
                                    <span>24 products</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </div>
        </section>
    )
}
