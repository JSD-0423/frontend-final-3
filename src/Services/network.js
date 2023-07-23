import axios from "axios";
const baseURL='https://nervous-boa-jersey.cyclic.app'

const client = axios.create({
    baseURL: baseURL,
    headers:{"Access-Control-Allow-Origin":"*"}
});


export const fetchData = async (url) => {
    try {
        const response = await client.get(url);
        return response.data;
    } catch (error) {
        return error
    }
};


export const postData = async (url, data) => {
    try {
        const response = await client.post(url, data);
        return response.data;
    } catch (error) {
        return error
    }
};


export const updateData = async (url, data) => {
    try {
        const response = await client.put(url, data);
        return response.data;
    } catch (error) {
        return error
    }
};


export const deleteData = async (url) => {
    try {
        const response = await client.delete(url);
        return response.data;
    } catch (error) {
        return error
    }
};