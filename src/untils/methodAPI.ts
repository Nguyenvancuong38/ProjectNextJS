import instance from '../config/axiosConfig';

function getAPI(url: string) {
    return instance.get(url);
}

function getAPIWithParam(url: string, params: object) {
    return instance.get(url, params);
}

const API = {
    get: getAPI,
    getWithParam: getAPIWithParam,
}

export default API;