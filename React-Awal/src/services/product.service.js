import axios from "axios";

export const getProducts = async (callback) => {
    await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProduct = async (id, callback) => {
    await axios
        .get(`https://fakestoreapi.com/products/${id}`) 
        .then((response) => {

            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
