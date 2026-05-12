import Link from "next/link";
import "./shopByRoom.scss";

export default function ShopByRoom() {
  return (
    <div className='shop-by-room'>
        <div className="container">

           <ul className="products-section-cards">
                <li className='section-card'>
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Bedroom
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src="/images/shop-by-room/modern-bedroom.jpg" alt="bedroom" />
                </li>
                <li className='section-card'>
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Living room
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src="/images/shop-by-room/modern-living-room.jpg" alt="living-room" />
                </li>
                <li className='section-card'>
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Hallway
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src="/images/shop-by-room/modern-hallway.jpg" alt="hallway" />
                </li>
                <li className='section-card'>
                    <Link href="/">
                        <span className='with-arrow-right'>
                            Kitchen
                            <img src="/icons/arrow-right.svg" alt="arrow-right-icon" />
                        </span>
                    </Link>
                    <img src="/images/shop-by-room/modern-kitchen.jpg" alt="kitchen" />
                </li>
           </ul>
        </div>
    </div>
  )
}
