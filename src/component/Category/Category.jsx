import React from 'react';

const Category = ({item}) => {
    return (
        <div className='from-pink-200 to-blue-200 bg-linear-to-br rounded-2xl m-2'>
            <div className='p-5 h-[200px]'>
                <div className='flex justify-between'>
                    <h1 className='font-bold bg-red-500 px-3 py-1 text-white rounded-full'>{item.name.charAt(0)}</h1>
                    <h1 className='font-bold bg-white px-3 py-1  rounded-full'>{item.product_count} items</h1>
                </div>
                <div>
                    <h1 className='font-bold text-xl pt-6'>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
                <div className='pt-4 text-pink-500'>
                    <a href="#" className='font-bold'>Explore </a>
                </div>
            </div>

        </div>
    );
};

export default Category;