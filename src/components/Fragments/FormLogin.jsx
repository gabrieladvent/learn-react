import InputForm from "../Elements/Inputs/InputForm";
import Button from "../Elements/Buton";
const FormLogin = () => {
    return (
        <form action="">
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
                >
                    Login
                </Button>
            </div>
        </form>
    );
};

export default FormLogin