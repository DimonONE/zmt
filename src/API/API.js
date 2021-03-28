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
        console.warn("Мене было сень переделывать путь к файлу в каждом файле");
        return  profileAPI.getProfile(userId)
    },

}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`);
    },

    getStatus: (userId) => {
        return instance.get('profile/status/' + userId);
    },
    
    UpdateStatus: (status) => {
        return instance.put('profile/status', {status: status});
    },
}



export const authAPI = {
    authMe: () => {
        return instance.get('auth/me');
    },
}

