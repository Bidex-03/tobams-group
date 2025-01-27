import axios from "axios";
import { Article } from "../interface/interfaces";

const API_URL = "https://dev.to/api/articles";

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
