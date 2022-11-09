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



// "mixers":[
  
//   {
//     "id":1,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":2,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":5
//   }
//   ,
//   {
//     "id":3,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":4,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":2
//   },
//   {
//     "id":5,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":3
//   },
//   {
//     "id":6,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":5
//   },
//   {
//     "id":7,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":8,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":3
//   },
//   {
//     "id":9,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":5
//   },
//   {
//     "id":10,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":11,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":3
//   },
//   {
//     "id":12,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":2
//   },
//   {
//     "id":13,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":14,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":5
//   },
//   {
//     "id":15,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":3
//   },
//   {
//     "id":16,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   },
//   {
//     "id":17,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":2
//   },
//   {
//     "id":18,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":5
//   },
//   {
//     "id":19,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":3
//   },
//   {
//     "id":20,
//     "name": "",
//     "price": ,
//     "image":"",
//     "status":false,
//     "count":4
//   }
// ]