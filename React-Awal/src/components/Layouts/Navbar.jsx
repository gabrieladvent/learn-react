import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Buton"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { total } = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            <Button
                classname={`p-2 rounded ${isDarkMode ? "bg-white text-black" : "bg-black text-white"} me-2`}
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "Light" : "Dark"}
            </Button>

            <div className="flex items-center bg-gray-800 rounded-md p-2 me-3">
                {totalCart} | { ((total).toLocaleString(
                                'en-US', { 
                                    style: 'currency', 
                                    currency: 'USD' }
                                )) }
            </div>
            {username}

            <Button
                classname="bg-black ml-5"
                onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar