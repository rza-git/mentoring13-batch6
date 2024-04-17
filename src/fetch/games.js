import instance from "../lib/axios.js"


export const getGames = async () => {

    const response = await instance({
        method: "GET",
        url: "/games?limit=100"
    })

    const {data} = response.data;
    return data;
}

export const createGames = async (params) => {

    const response = await instance({
        method: "POST",
        url: "/games",
        data: params
    })

    const {data} = response;

    return data;
}

export const uploadImage = async (params) => {

    const response = await instance.postForm("/games/uploads", params)
    const {data} = response;
    return data.image_url
}