import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Buton";
import {getProducts} from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
    const totalPriceRef = useRef(null);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    const cartRef = useRef(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        // Mengatur totalPrice berdasarkan perubahan cart
        if (products.length > 0 && cart.length > 0) {
            setTotalPrice(
                cart.reduce((acc, item) =>
                    acc + item.qty * products.find((product) => product.id === item.id).price,
                    0
                )
            );

            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [totalPrice, cart]);

    useEffect(() => {
        getProducts((data) => (
            setProducts(data)
        ));
    }, []);


    return (
        <Fragment>

            <div
                className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {username}
                <Button
                    classname="bg-black ml-5"
                    onClick={handleLogout}>
                    Logout
                </Button>
            </div>

            <div className="flex justify-center py-5">
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
                                handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>

                <div className="w-2/6">
                    <h1 className="text-3xl ml-2 mb-2 mg-2 font-bold text-blue-600">
                        Cart
                    </h1>

                    <table className="text-left table-auto border-separate border-spacing-x-2">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find(product => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 20)}</td>
                                        <td>
                                            {product.price.toLocaleString('en-US',
                                                {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                        </td>

                                        <td>{item.qty}</td>
                                        <td>
                                            {(product.price * item.qty).toLocaleString('en-US',
                                                {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                        </td>
                                    </tr>
                                )
                            })}

                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>
                                        {(totalPrice).toLocaleString('en-US',
                                            {
                                                style: 'currency',
                                                currency: 'USD',
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            }
                                        )}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* <div className="mt-5 flex justify-center">
                    <Counter></Counter>
            </div> */}
        </Fragment>
    );
}

export default ProductPage