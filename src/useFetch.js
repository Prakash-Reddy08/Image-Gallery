import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [url])

    return { loading, data }
}

export default useFetch