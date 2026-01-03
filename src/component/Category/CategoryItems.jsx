import React, { useEffect, useState } from 'react';
import ApiClient from '../../services/Api-client';
import Category from './Category';

const CategoryItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        ApiClient.get("/category").then((res) => setItems(res.data))
        // ApiClient.get("/category/").then((res) => console.log(res.data))

    })
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {items.map((item)=>(
                    <Category key={item.id} item={item}/>
                    
                ))}
            </div>
        </section>
    );
};

export default CategoryItems;