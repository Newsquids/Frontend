import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const instance = axios.create({
  withCredentials: true,
  baseURL: SERVER_URL,
});

export const apis = {
  signUp: (signUpRequest: any) =>
    instance
      .post('/api/user/signup', signUpRequest)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  signIn: (signInRequest: any) =>
    instance
      .post('/api/user/signin', signInRequest)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      }),
  updateRefreshToken: (getRefresh: any) =>
    instance
      .post('/api/user/refresh', getRefresh)
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
