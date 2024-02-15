import axios from "axios";

export const getProducts = () => {
    return axios.get(import.meta.env.VITE_API_URL + '/products');
};

export const getProduct = (id) => {
    return axios.get(import.meta.env.VITE_API_URL + '/products/' + id);
};

export const createProduct = (product) => {
    return axios.post(import.meta.env.VITE_API_URL + '/products/', product);
};

export const deleteProduct = (id) => {
    return axios.delete(import.meta.env.VITE_API_URL + '/products/' + id);
};

export const updateProduct = (id, product) => {
    return axios.patch(import.meta.env.VITE_API_URL + '/products/' + id, product);
};

