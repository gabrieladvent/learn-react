import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    return (
        <div className={`flex justify-center min-h-screen items-center 
                        ${ isDarkMode && "bg-slate-800"}`}>
            <div className="w-full max-w-xs">
                <button 
                    className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
                    onClick={() => setIsDarkMode(!isDarkMode) }>
                        { isDarkMode ? "light" : "Dark"}
                </button>

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
