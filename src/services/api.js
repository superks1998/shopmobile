import axios from "axios";
import * as api from "./constants";

export const getListDataProducts = async () => {
    const urlApi = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCTS_URL}`;

    const response = await axios.get(urlApi);
    const result = (await response.status) === 200 ? await response.data : [];

    return result;
};

export const getDataProductById = async (id = 0) => {
    const urlApi = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.DETAIL_PRODUCT_URL}${id}`;

    const response = await axios.get(urlApi);
    const result = (await response.status) === 200 ? await response.data : [];

    return result;
};
