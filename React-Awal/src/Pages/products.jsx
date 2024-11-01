import { Fragment, useEffect, useContext, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";

import CardProduct from "../components/Fragments/CardProducts";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { isDarkMode } = useContext(DarkMode);
    useLogin();

    useEffect(() => {
        getProducts((data) => (
            setProducts(data)
        ));
    }, []);


    return (
        <Fragment>
            <Navbar/>
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-black"}`}>
                <div
                    className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header img={product.image} id={product.id} />

                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>

                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                            />
                        </CardProduct> 
                    ))}
                </div>

                <div className="w-2/6">
                    <h1 className={`text-3xl ml-2 mb-2 mg-2 font-bold ${isDarkMode ? "text-white" : "text-blue-600"}`}>
                        Cart
                    </h1>
                    <TableCart products={products}/>
                </div>
            </div>


            {/* <div className="mt-5 flex justify-center">
                    <Counter></Counter>
            </div> */}
        </Fragment>
    );
}

export default ProductPage