import { useEffect, useState } from 'react';
import ApiClient from '../../services/Api-client';
import ShopList from './ShopList';
import ErrorAlert from '../Product/ErrorAlert';

const ShopPage = () => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/immutability
        fetchProducts()
    }, [])

    
    const fetchProducts=()=>{
        setLoading(true)
        ApiClient.get("/product")
            .then((res) => {setProduct(res.data) , console.log(res.data)})
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }




    return (
        <div>

            {
                error && (
                    <h1>
                    <ErrorAlert error={error} />
                    </h1>
                )
            }

            {loading && (
                <div className='flex justify-center py-6 text-6xl'>
                    <div >
                        
                        <span className="loading loading-spinner text-primary"></span>
                        <span className="loading loading-spinner text-secondary"></span>
                        <span className="loading loading-spinner text-accent"></span>
                        <span className="loading loading-spinner text-neutral"></span>
                        <span className="loading loading-spinner text-info"></span>
                        <span className="loading loading-spinner text-success"></span>
                        <span className="loading loading-spinner text-warning"></span>
                        <span className="loading loading-spinner text-error"></span>
                    </div>
                </div>
                
            )}
            <div >
                <ShopList product={product} />
            </div>

        </div>
    );
};

export default ShopPage;