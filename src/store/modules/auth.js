import axios from "axios";

const posts = {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
	mutations: {
    },
	actions: {
        async signIn (_, credentials) {
            let response = axios.post('auth/signin', credentials)

            console.log(response.data);
        }
    }
}

export default posts;