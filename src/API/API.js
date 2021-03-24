import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1cdd557f-6df8-4706-98d5-0eb159dfa69e"
    }
})

export const userAPI = {
    getUsers: (pageActive, sizeLinePage) => {
        return instance.get(`users?page=${pageActive}&count=${sizeLinePage}`)
            .then(response => response.data)
    },

    getUsersChanget: (numPage, sizeLinePage) => {
        return instance.get(`users?page=${numPage}&count=${sizeLinePage}`)
               .then(response => response.data)
    },

    folowUser: (id) => {
        return instance.post(`follow/${id}`, {})
               .then(response => response.data)
    },

    unFolowUser: (id) => {
        return instance.delete(`follow/${id}`)
               .then(response => response.data)
    },

    getProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },

}

export const authAPI = {
    authMe: () => {
        return instance.get('auth/me');
    },
}

