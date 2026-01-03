import ProductCart from '../Product/ProductCart';


const ShopList = ({product}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {product.map((item) => (
                <ProductCart key={item.id} product={item} />
            ))}

        </div>
    );
};

export default ShopList;