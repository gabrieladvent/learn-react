import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Buton";

const products = [
    {
        id: 1,
        img: "/images/shoes-sneakers.jpg",
        title: "Sneakers",
        price: 1000000,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis laborum blanditiis quaerat neque, tempora esse accusantium dicta mollitia placeat a debitis et sequi illo quae adipisci pariatur in accusamus sint.`
    },
    {
        id: 2,
        img: "/images/shoes-sneakers.jpg",
        title: "Sepatu",
        price: 100000,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`
    },
    {
        id: 3,
        img: "/images/shoes-sneakers.jpg",
        title: "Sepatu Baru",
        price: 2000000,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. lorem ipsum dolor sit, amet consectetur adipisicing elit.`
    }
]

const email = localStorage.getItem("email");

const ProductPage = () => {

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");

        window.location.href = "/login";
    };

    const [cart, setCart] = useState([
        {
            id: 2,
            qty: 1
        }
    ]);

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    return (
        <Fragment>
            <div
                className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button
                    classname="bg-black ml-5"
                    onClick={handleLogout}>
                    Logout
                </Button>
            </div>

            <div className="flex justify-center py-5">

                <div
                    className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header img={product.img} />

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
                            {cart.map((item) => {
                                const product = products.find(product => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>
                                            {product.price.toLocaleString('id-ID',
                                                {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                        </td>

                                        <td>{item.qty}</td>
                                        <td>
                                            {(product.price * item.qty).toLocaleString('id-ID',
                                                {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </Fragment>
    );
}

export default ProductPage