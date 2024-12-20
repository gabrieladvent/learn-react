import { useState, useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const totalPriceRef = useRef(null);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode } = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = 
                cart.reduce((acc, item) =>
                    acc + item.qty * products.find((product) => product.id === item.id).price,
                    0
                );
            
            dispatch({ 
                type: "UPDATE", 
                payload: { total: sum } 
            });

            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [total, cart]);

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
                                    })}
                            </td>

                            <td>{item.qty}</td>
                            <td>
                                {(product.price * item.qty).toLocaleString('en-US',
                                    {
                                        style: 'currency',
                                        currency: 'USD',
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
                            {(total).toLocaleString('en-US',
                                {
                                    style: 'currency',
                                    currency: 'USD',
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