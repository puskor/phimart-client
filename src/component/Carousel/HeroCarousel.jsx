
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';
import book from "../../assets/image/bookbgr.png"
import laptop from "../../assets/image/howard-bouchevereau-RSCirJ70NDM-unsplash-removebg-preview.png"
import shirt from "../../assets/image/shirt.png"



const HeroCarousel = () => {
    const slides = [
        {
            title: "Your product is best",
            subtitle: "20% discount",
            image: book
        },
        {
            title: "Your like is best",
            subtitle: "30% discount",
            image: laptop
        },
        {
            title: "Your choice is best",
            subtitle: "40% discount",
            image: shirt
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <CarouselSlide title={slide.title} subtitle={slide.subtitle} image={slide.image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default HeroCarousel