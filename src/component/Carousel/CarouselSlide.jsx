

import bg1 from "../../assets/image/bg3.jpg"


const CarouselSlide = ({title , subtitle ,image}) => {
    return (
        <div>
            <section className="w-full h-[400px]  flex items-center bg-cover bg-center" style={{backgroundImage:`url(${bg1})`}}>
                <div className="flex flex-col md:flex-row justify-between items-center px-5 mx-auto max-w-7xl gap-8" >
                    {/* left site */}
                    <div className="w-full md:w-1/2 text-center">
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-900">{title}</h1>
                        <p className="text-red-500 py-3">{subtitle}</p>
                        <button className="btn btn-secondary px-8">Click</button>
                    </div>
                    {/* rite site */}
                    {/* <div className="w-full md:w-1/2 flex justify-center"> */}
                        <img className="w-full max-w-[350px] h-[230px] md:h-full " src={image} alt="" />
                    {/* </div> */}
                </div>
            </section>

            
        </div>

    );
};

export default CarouselSlide;