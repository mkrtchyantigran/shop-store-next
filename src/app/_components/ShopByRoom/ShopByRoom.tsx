import Link from "next/link";
import Image from "next/image";
import "./shopByRoom.scss";

export default function ShopByRoom() {
  return (
    <div className='shop-by-room'>
        <div className="container">

           <ul className="products-section-cards">
                <li className='section-card'>
                    <Image src="/images/shop-by-room/modern-bedroom.jpg" alt="bedroom" fill sizes="(max-width: 768px) 100vw, 66vw" />
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Bedroom
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                </li>
                <li className='section-card'>
                    <Image src="/images/shop-by-room/modern-living-room.jpg" alt="living-room" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Living room
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                </li>
                <li className='section-card'>
                    <Image src="/images/shop-by-room/modern-hallway.jpg" alt="hallway" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Hallway
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                </li>
                <li className='section-card'>
                    <Image src="/images/shop-by-room/modern-kitchen.jpg" alt="kitchen" fill sizes="(max-width: 768px) 100vw, 33vw" />
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Kitchen
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                </li>
           </ul>
        </div>
    </div>
  )
}
