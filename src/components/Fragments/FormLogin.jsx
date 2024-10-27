import InputForm from "../Elements/Inputs/InputForm";
import Button from "../Elements/Buton";
import { useEffect, useRef } from "react";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);

        window.location.href = "/products";
    };

    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                title="Email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                ref={emailRef} // Ref dipasang di sini
            />

            <InputForm
                title="Password"
                type="password"
                name="password"
                placeholder="********"
            />

            <div className="flex items-center justify-between">
                <Button
                    classname="bg-blue-600 w-full"
                    type="submit"
                >
                    Login
                </Button>
            </div>
        </form>
    );
};

export default FormLogin;
