import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500">
                    Welcome, Please {title} Your Account
                </p>
                {children}

                <p className="text-center text-slate-500 mt-3">

                    {type === "login" 
                        ? "Don't have an account? " 
                        : "Already have an account? "
                    }
                    
                    <Link to={type === 'login' ? '/register' : '/login'} className="text-blue-600 font-bold">
                        {type === "login" 
                            ? "Register" 
                            : "Login"
                        }
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AuthLayouts;
