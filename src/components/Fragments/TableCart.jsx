import { useState, useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCart = (props) => {
    const { products } = props;
    const totalPriceRef = useRef(null);
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);
    const { isDarkMode } = useContext(DarkMode);

    useEffect(() => {
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

    return (
        <table className={` text-left table-auto border-separate border-spacing-x-2 ${isDarkMode ? "text-white" : "text-black"}`}>
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
    )
}

export default TableCart