import MainBanner from './_components/MainBanner/MainBanner';
import ShopByCategories from './_components/ShopByCategories/ShopByCategories';
import NewProducts from './_components/NewProducts/NewProducts';
import ShopByRoom from './_components/ShopByRoom/ShopByRoom';
import PromoVideo from './_components/PromoVideo/PromoVideo';
import Bestsellers from './_components/Bestsellers/Bestsellers';
import CustomerReviews from './_components/CustomerReviews/CustomerReviews';
import IconsBar from '@/components/IconsBar/IconsBar';

export default function Home() {
    return (
        <>
            <MainBanner />
            <ShopByCategories />
            <NewProducts />
            <ShopByRoom />
            <PromoVideo />
            <Bestsellers />
            <CustomerReviews />
            <IconsBar />
        </>
    );
}
