import {useState, useEffect} from "react";

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(res.ok !== true){
                  throw Error("not able to fetch data from json...");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
      }, [])

      return {data,isPending,error}
}

export default useFetch;