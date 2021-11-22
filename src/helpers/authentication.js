import jwt from "jsonwebtoken";

const SECRET_KEY = "123456789";
const expiredIn = "3h";

export const getTokenFromLocalStorage = () => {
    const token = localStorage["persist:token-persist"];

    if (token !== undefined && token !== null && token !== "") {
        const jsonToken = JSON.parse(token);
        if (jsonToken.hasOwnProperty("token")) {
            return JSON.parse(jsonToken["token"]);
        }
    }
};

export const decodeTokenFromLocalStorage = (tk = null) => {
    const token = tk === null ? getTokenFromLocalStorage() : tk;
    let decodeToken = null;
    if (token !== undefined && token !== null && token !== "") {
        decodeToken = jwt.verify(token, SECRET_KEY, expiredIn);
    }

    return decodeToken;
};

export const removeTokenLocalStorage = () => {
    localStorage.removeItem("token");
};

export const getUsername = (token = null) => {
    const infoUser = decodeTokenFromLocalStorage(token);
    let username = null;

    if (infoUser !== null) {
        username = infoUser.username;
    }

    return username;
};

export const isLogin = (tk = null) => {
    const token = tk === null ? getTokenFromLocalStorage() : tk;

    if (token !== undefined && token !== null && token !== "") {
        return true;
    }

    return false;
};

export const isAuthorization = (tk = null) => {
    const token = decodeTokenFromLocalStorage(tk);

    const now = new Date.getTime() / 1000;

    if (token.exp < now) {
        return false;
    }

    return true;
};
