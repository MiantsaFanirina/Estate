import axios from "axios";

export const getOrders = () => {
    return axios.get(import.meta.env.VITE_API_URL + '/orders');
};

export const getOrder = (id) => {
    return axios.get(import.meta.env.VITE_API_URL + '/orders/' + id);
};

export const createOrder = (order) => {
    return axios.post(import.meta.env.VITE_API_URL + '/orders/', order);
};

export const deleteOrder = (id) => {
    return axios.delete(import.meta.env.VITE_API_URL + '/orders/' + id);
};

export const updateOrder = (id, order) => {
    return axios.patch(import.meta.env.VITE_API_URL + '/orders/' + id, order);
};

