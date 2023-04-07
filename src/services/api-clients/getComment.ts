import axios from "axios";

const URL_COMMENT = "https://jsonplaceholder.typicode.com/";

export const getData = async (url:string) => {
    const data = await axios.get(`${URL_COMMENT}${url}`);
    return data;
}