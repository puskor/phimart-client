import React from 'react';
import backgnd from "../../assets/image/default_product.jpg"

const ProductCart = ({ product }) => {
    return (
        <section>
            
            <div>
                
                <div className="card bg-base-100 shadow-sm px-2 ">
                    <figure className="px-10 pt-6">
                        <img
                            src={product.images.length > 0 ? product.images[0].image : backgnd}
                            alt="Shoes"
                            className="rounded-xl w-[200px] h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product.name}</h2>
                        <h1 className='font-bold text-red-600'>${product.price}</h1>
                        <p>"{product.description}"</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCart;
