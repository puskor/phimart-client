import { Routes, Route } from "react-router";

import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Product from "../component/Product/Product";
import Shop from "../page/Shop";


const AppRoutes = () => {
    return (
        <div >
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='' element={<Home/>} />
                    {/* <Route path="product" element={<Product />} /> */}
                    <Route path="shop" element={<Shop/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;