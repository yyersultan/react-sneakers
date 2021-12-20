import axios from "axios";

export const instance = axios.create({
    baseURL : 'https://sneakertown-2dc29-default-rtdb.asia-southeast1.firebasedatabase.app/',
    headers : {'Access-Control-Allow-Origin': '*'}
})

export const getBrandList = (section : string) => {
    return instance.get(`/${section}.json`);
}

