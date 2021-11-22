import axios from "axios";
import * as auth from "../helpers/authentication";

export const loginApi = async (username, password) => {
    const response = await axios({
        url: `http://localhost:8000/auth/login`,
        method: "POST",
        headers: {
            // "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            Authorization: `Bearer ${auth.getTokenFromLocalStorage()}`,
        },
        data: {
            username,
            password,
        },
    });

    const result = (await response.status) === 200 ? await response.data : {};

    return result;
};
