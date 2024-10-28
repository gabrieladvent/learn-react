import InputForm from "../Elements/Inputs/InputForm";
import Button from "../Elements/Buton";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }

        login(data, (status, res) =>{
            if (status) {
                console.log("true", res);
                localStorage.setItem("token", res);
                window.location.href = "/products";

            } else {
                console.log("false", res.response.data);
                setLoginFailed(res.response.data);
            }
        });

    };

    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                title="Username"
                type="text"
                name="username"
                placeholder="John Doe"
                ref={usernameRef}
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
            {
                loginFailed && (
                    <p className="text-red-500 rounded-md text-center text-lg mb-3">{loginFailed}</p>
                )
            }
        </form>
    );
};

export default FormLogin;
