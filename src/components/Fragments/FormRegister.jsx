import InputForm from "../Elements/Inputs/InputForm";
import Button from "../Elements/Buton";
const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
                title="Full Name" 
                type="text" 
                name="fullname" 
                placeholder="Insert your name">
            </InputForm>

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

            <InputForm
                title="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="********">
            </InputForm>

            <div className="flex items-center justify-between">
                <Button 
                    classname="bg-blue-600 w-full"
                >
                    Register
                </Button>
            </div>
        </form>
    );
};

export default FormRegister