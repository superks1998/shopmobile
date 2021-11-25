import axios from "axios";

export const signupApi = async (username, password) => {
    const response = await axios({
        url: `http://localhost:8000/auth/register`,
        method: "POST",
        data: {
            username,
            password,
        },
    });

    const result = (await response.status) === 200 ? await response.data : {};

    return result;
};

export default signupApi;
