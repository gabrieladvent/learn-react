import InputForm from "../Elements/Inputs/InputForm";
import Button from "../Elements/Buton";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);

        window.location.href = "/products";
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                title="Email" 
                type="email" 
                name="email" 
                placeholder="example@gmail.com">
            </InputForm>

            <InputForm
                title="Password"
                type="password"
                name="password"
                placeholder="********">
            </InputForm>

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

export default FormLogin