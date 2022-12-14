import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a8e52779-c2d9-43fb-8b1d-c2561c3dbbfd',
  },
  withCredentials: true,
});

// export const getUsers = (currentPageNumber, pageSize) => {
//   return instance.get('users', {
//     params: {
//       page: currentPageNumber,
//       count: pageSize,
//     }
//   }).then(response => response.data);
// };
export const usersAPI = {
  getPage: async (currentPageNumber, pageSize) => {
    return (await axiosInstance.get('users', {
      params: {
        page: currentPageNumber,
        count: pageSize,
      }
    })).data;
  },

  follow: async (userId) => {
    return (await axiosInstance.post('follow/' + userId)).data;
  },

  unfollow: async (userId) => {
    return (await axiosInstance.delete('follow/' + userId)).data;
  },
};

export const profileAPI = {
  getProfile: async (userId) => {
    return (await axiosInstance.get('profile/' + userId)).data;
  },

  getStatus: async (userId) => {
    return (await axiosInstance.get('profile/status/' + userId)).data;
  },

  updateStatus: async (newStatus) => {
    return (await axiosInstance.put('profile/status/', { status: newStatus })).data;
  },

  savePhoto: async (photoFile) => {
    const form = new FormData();
    form.append('image', photoFile);

    return (await axiosInstance.put('profile/photo/', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })).data;
  },
  saveUserData: async (data) => {
    return (await axiosInstance.put('profile', data)).data;
  },
};

export const authorizationAPI = {
  me: async () => {
    return (await axiosInstance.get('auth/me')).data;
  },

  login: async (loginData) => {
    console.log('loginData: ', loginData);
    return (await axiosInstance.post('auth/login', loginData)).data;
  },

  logout: async () => {
    return (await axiosInstance.delete('auth/login')).data;
  },
};

export const securityAPI = {
  getCaptchaUrl: async () => {
    return (await axiosInstance.get('security/get-captcha-url')).data;
  },
};