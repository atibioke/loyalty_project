import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://www.anapioficeandfire.com/api/books";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([]);

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setValue(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts(url);
  }, []);
  return { loading, value };
};
