// import CarouselSlide from "../component/Carousel/CarouselSlide";
import HeroCarousel from "../component/Carousel/HeroCarousel";
import Category from "../component/Category/category";
import CategoryItems from "../component/Category/CategoryItems";

import DiscountSection from "../component/Discount/DiscountSection";
import Features from "../component/Discount/Features";
import Product from "../component/Product/Product";
import ProductCart from "../component/Product/ProductCart";


const Home = () => {
    return (
        <div>

            {/* <CarouselSlide/> */}
            <HeroCarousel/>
            <Features/>
            {/* <ProductCart/> */}
            <CategoryItems/>
            
            <Product/>
            <DiscountSection/>
         
            
        </div>
    );
};

export default Home;