

import bg1 from "../../assets/image/bg4.jpg"
import bookbgr2 from "../../assets/image/bookbgr2.png"
import DiscountTimer from "./DiscountTimer";


const DiscountSection = () => {
    return (
        <div>
            <section className="w-full h-[400px]  flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-7xl gap-8" >
                    {/* left site */}

                    <img className="w-full max-w-[300px] h-[200px] md:h-[300px]" src={bookbgr2} alt="" />


                    {/* rite site */}

                    <div className="w-full md:w-1/2 text-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 pb-4">30% Discount On All Items . Hurry Up !!</h1>
                        {/* discount timer */}
                        <DiscountTimer/>
                        <button className="btn btn-secondary px-8 rounded-2xl">Shop Collection</button>
                    </div>

                </div>
            </section>


        </div>

    );
};

export default DiscountSection;