import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Buton"
import { useSelector } from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

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
        <div
            className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            
            <div 
                className="flex items-center bg-gray-800 rounded-md p-2 me-3">
                    {totalCart}
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