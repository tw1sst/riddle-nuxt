import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    const token = useCookie('nuxt-jwt-auth-token')

    let jwt: string = ""
    if (token?._value?.token) {
        jwt = token?._value.token
    }

    axios.defaults.withCredentials = true
    axios.defaults.credentials = true
    axios.defaults.baseURL = "http://localhost:8000/api";

    let axiosApi = axios.create({
        baseUrl: axios.defaults.baseURL,
        headers: {
            // Authorization: `Bearer ` + jwt,
            common: {},
        },
    });
    return {
        provide: {
            axios: axiosApi,
        },
    };
});
