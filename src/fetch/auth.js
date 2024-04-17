import instance from "../lib/axios.js"

export const login = async (params) => {

    const {email, password} = params;

    const response = await instance({
        method: "POST",
        url: "/auth/login",
        data: {
            email,
            password
        }
    })

    const {data} = response;
    localStorage.setItem("accessToken", data.accessToken);
    return data;
    
}

