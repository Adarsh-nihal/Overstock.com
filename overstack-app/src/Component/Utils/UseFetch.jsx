import axios from "axios";
import { useEffect, useState } from "react";






const useFetch = (url,page) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get(url)
      .then((e) => {
        setLoading(true);
        console.log(e);
        setData(e.data);
      })
      .catch((r) => {
        setLoading(false);
        setError(true);
        console.log(r);
      });
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);




  return { loading, error, data,setData };
};
export { useFetch };



