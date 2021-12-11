import {useEffect, useState} from 'react';
import axios from 'axios';


const useFetch = (url) => {
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
      useEffect (()=> {
        const fetchData = async () => {
          try {
            const response = await axios.get(url);
            setApiData(response.data);
          } catch (error) {
            setServerError(error);
          }  
        };
        fetchData()
        return () => {
          fetchData()
         }
      },[url])
    return { apiData, serverError };
  };

  export default useFetch;