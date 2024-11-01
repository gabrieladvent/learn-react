import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState("");
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (
                !token || 
                token === "undefined" || 
                token === null || 
                token === "") 
            {
            window.location.href = "/login";
        } else {
            setUsername(getUsername(token));
        }
    }, []);

    return username;
}