import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const instance = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

instance.interceptors.request.use((req) => {
  if (req.headers && window.localStorage.getItem('access') !== null) {
    req.headers.Authorization = `Bearer ${window.localStorage.getItem('access')}`;
  }
  return req;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.data == 'ExpiredDate') {
      const result = await instance.put('/api/user/refresh', {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('access')}`,
          refresh: `${window.localStorage.getItem('refresh')}`,
        },
      });
      window.localStorage.setItem('access', result.data.access);
      window.localStorage.setItem('refresh', result.data.refresh);

      originalRequest.headers.Authorization = `Bearer ${window.localStorage.getItem('access')}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const apis = {
  signUp: () =>
    instance
      .get('/api/user/auth/google')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  googleCallback: (code: string | string[]) =>
    instance
      .post('/api/user/auth/google/callback', code)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  updateFinanceIndex: () =>
    instance
      .get('/api/index')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  updateBookMark: (newsId: number) =>
    instance
      .post(`/api/news/${newsId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  fetchTodayNews: (page: number) =>
    instance
      .get(`/api/news/today?page=${page}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  fetchChannelNews: (page: number, channel: string, category: string) =>
    instance
      .get(`/api/news?page=${page}&channel=${channel}&category=${category}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  fetchSearchNews: (page: number, search: string) =>
    instance
      .get(`/api/news?page=${page}&search=${search}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
};
