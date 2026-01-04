import React from 'react';

const PagePagination = ({ page , currentPage , handelPage}) => {
    return (
        <div className='flex justify-around my-2'>
            <h1 className='flex justify-between'>{Array.from({ length: page }, (_, i) => (
                <button 
                key={i}
                onClick={()=>handelPage(i+1)}
                className={`px-3 py-1 mx-1 rounded-xl ${currentPage==i+1 ? "text-white bg-secondary text-xl font-bold" : "bg-gray-200" } `}>{i + 1}</button>
            ))}
            </h1>
        </div>
    );
    
};

export default PagePagination;


