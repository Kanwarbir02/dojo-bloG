import {useState, useEffect} from "react";

const useFetch = (url) => {

    const abortFetch = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {signal: abortFetch.signal})
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                  } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                  }
            })

            return () =>  abortFetch.abort();
      }, [url])

      return {data,isPending,error}
}

export default useFetch;