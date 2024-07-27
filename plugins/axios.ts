import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
    // const { data } = useAuth()

    const runtimeConfig = useRuntimeConfig()
    let jwt = ""

    // if (data?._object["$sauth:data"]?.user?.accessToken) {
    //     jwt = data._object["$sauth:data"].user.accessToken
    // }

    axios.defaults.withCredentials = true
    axios.defaults.credentials = true
    axios.defaults.baseURL = "http://localhost:8000";

    let axiosApi = axios.create({
        baseUrl: axios.defaults.baseURL,
        headers: {
            //Authorization: `Bearer ${jwt}`,
            common: {},
        },
    });
    return {
        provide: {
            axios: axiosApi,
        },
    };
});
