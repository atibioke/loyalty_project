import { useState, useEffect } from "react";
import paginate from "./utils";

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-06-04&sortBy=publishedAt&apiKey=ac322d07c7c348f881e4e8b608d1e1b3";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setValue(paginate(data.articles));
    setLoading(false);
  };

  useEffect(() => {
    getProducts(url);
  }, []);
  return { loading, value };
};
