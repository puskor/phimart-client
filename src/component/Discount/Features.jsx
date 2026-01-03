import React from 'react';
import { ShoppingCart, BadgeCheck, BadgeIndianRupee, Car} from 'lucide-react';

const Features = () => {
    const items = [
        {
            icon: <ShoppingCart />,
            title: "Free Delivery",
            Subtitles: "Get your orders at no extra cost with fast"
        },
        {
            icon: <BadgeCheck />,
            title: "100% Guarantee",
            Subtitles: "We insure it is genuine "
        },  {
            icon: <BadgeIndianRupee />,
            title: "Budget Friendly",
            Subtitles: "Get your orders at no extra cost with fast"
        },  {
            icon: <Car />,
            title: "100% Fast Delivery",
            Subtitles: "Get your orders at no extra cost with fast"
        },
    ]
    return (
        <div >

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:p-5 py-4'>
                {items.map((items, index) => (
                    <div key={index} className='p-2'>
                        <div className='flex justify-center pb-3 text-red-600'>
                            {items.icon}
                        </div>
                        <h1 className='text-xl text-center'>{items.title}</h1>
                        <p className='text-gray-500 text-center'>{items.Subtitles}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;