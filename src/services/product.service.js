import axios from "axios";

const getProducts = async (callback) => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
        // console.log(response.data);
        callback(response.data);
        // return response.data;
    })
    .catch((error) => {
        console.log(error);
    });
};

export default getProducts;
