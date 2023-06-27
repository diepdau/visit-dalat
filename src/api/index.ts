import axios from "axios";

// export const URL = "http://localhost:5000";
export const URL = "https://visit-dalat-api.vercel.app";

export const fetchDestinations = (params: object) =>
  axios.get(`${URL}/api/v1/destinations`, { params });
export const fetchFeaturedDestinations = () =>
  axios.get(`${URL}/api/v1/destinations/featured`);

export const fetchSingleDestination = (id: string) =>
  axios.get(`${URL}/api/v1/destinations/${id}`);

export const fetchDestinationsTotal = () =>
  axios.get(`${URL}/api/v1/destinations/total`);

export const fetchArticles = (params: object) =>
  axios.get(`${URL}/api/v1/articles`, { params });
export const fetchFeaturedArticles = () =>
  axios.get(`${URL}/api/v1/articles/featured`);
export const fetchArticlesTotal = (params: object) =>
  axios.get(`${URL}/api/v1/articles/total`, { params });
export const fetchSingleArticle = (id: string) =>
  axios.get(`${URL}/api/v1/articles/${id}`);

export const fetchCategories = () => axios.get(`${URL}/api/v1/categories`);
