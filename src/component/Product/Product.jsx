import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ErrorAlert from "./ErrorAlert";

import ApiClient from "../../services/Api-client";


const Product = () => {
    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true)
        ApiClient
            .get("/product")
            .then((res) => { setProducts(res.data)})
            .catch((err) => { setError(err.message) })
            .finally(() => setLoading(false))
    }, [])
    return (


        <section className="mx-auto bg-gray-50 py-5">

            <div className='flex justify-between py-2 px-5'>
                <h1 className="font-bold text-xl">Trending Products</h1>
                <a href="#" className='btn btn-secondary rounded-2xl'>View All</a>
            </div>
            {Loading && (
                <div className="flex justify-center py-3">
                    <span className="loading loading-spinner text-secondary"></span>
                </div>
            )}
            {
                error && (
                    <h1>
                        <ErrorAlert error={error} />
                    </h1>
                )
            }

            {!error && !Loading && products.length > 0 && (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    className="w-full px-0"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="flex justify-center px-7">
                            <ProductCart product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {!Loading && !error && products.length <=0 && (
                <h1 className="text-3xl flex justify-center py-3">There are no product</h1>
            )}

        </section>

    );
};

export default Product;