import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className="text-center text-slate-500 mt-3">have an account? 
                <Link to="/login" className="text-blue-600 font-bold">Login</Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;