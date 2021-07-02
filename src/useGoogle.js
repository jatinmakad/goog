import { useState, useEffect } from "react";
import API_KEY from "./Key";

const CONTEXT_KEY = "f3131bf6059d97a94";

const useGoogle = (term)  => {
  const [data, setData] = useState(null);
  useEffect(
    () => {
      const fetchData = async () => {
        fetch(
          `https://www.googleapis.com/customsearch/v1?key=
                 ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        ).then((res) => res.json())
        .then(results =>{
            setData(results)
        })
      }
      fetchData();
    },{ term })
  return {data}
};

export default useGoogle;
