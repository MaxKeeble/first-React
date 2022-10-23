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
};

export const authorizationAPI = {
  me: async () => {
    return (await axiosInstance.get('auth/me')).data;
  },

  login: async (loginData) => {
    return (await axiosInstance.post('auth/login', loginData)).data;
  }
};