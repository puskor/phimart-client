import { useEffect, useState } from 'react';
import ApiClient from '../../services/Api-client';
import ShopList from './ShopList';
import ErrorAlert from '../Product/ErrorAlert';
import PagePagination from "./PagePagination"

const ShopPage = () => {

    const [product, setProduct] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [page ,setPage] = useState(0)
    const [currentPage,setCurrentPage] = useState(1)
    
    // const fetchProducts=()=>{
    //     setLoading(true)
    //     ApiClient.get(`/product/?page=${currentPage}`)
    //         .then((res) => {setProduct(res.data.results), console.log(res.data) , setPage(Math.ceil(res.data.count/res.data.results.length))})
    //         .catch((err) => setError(err.message))
    //         .finally(() => setLoading(false))
    // }

    const fetchProducts = async()=>{
        setLoading(true)
        try{
            const response = await ApiClient.get(`/product/?page=${currentPage}`)
            const data = await response.data

            setProduct(data.results)
            setPage(Math.ceil(data.count / data.results.length))

        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading(false)
        }


    }




    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    // setPageNumber(setPage/)

    




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
                <PagePagination page={page} currentPage={currentPage} handelPage={setCurrentPage} />
            </div>

        </div>
    );
};

export default ShopPage;