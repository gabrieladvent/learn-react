import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = async (data, callback) => {
    const res = await axios
        .post("https://fakestoreapi.com/auth/login", 
            data
        )
        .then((res) => {
            callback(true, res.data.token)
        })
        .catch((error) => {
            callback(false, error)
        });
    return res;
};

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded.user;
}