import axios from "axios";
const baseURL='https://store-osn9.onrender.com'

const client = axios.create({
    baseURL: baseURL,
});


export const fetchData = async (url) => {


        const response = await client.get(url);
        return response.data;

};


export const postData = async (url, data) => {

        const response = await client.post(url, data);
        return response.data;

};


export const updateData = async (url, data) => {

        const response = await client.put(url, data);
        return response.data;

};


export const deleteData = async (url) => {

        const response = await client.delete(url);
        return response.data;

};