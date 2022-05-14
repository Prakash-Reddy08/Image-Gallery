import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [dark, setDark] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("nature");
    const [data, setData] = useState([]);
    const url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=RN5XslCt17tAeZ3G18C1m7c-Xze5v_LhP6VqXBVR45E&page=1`

    const fetchImages = async () => {
        const response = await axios.get(url);
        return response;
    }

    useEffect(() => {
        setLoading(true)
        fetchImages().then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [search])


    const userSearch = (query) => {
        setSearch(query);
    }

    const toggleDarkMode = () => {
        setDark(!dark);
    }
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const Modaldata = (data) => {
        setModalInfo(data);
    }

    return (
        <AppContext.Provider
            value={
                {
                    dark,
                    toggleDarkMode,
                    modalOpen,
                    openModal,
                    closeModal,
                    modalInfo,
                    Modaldata,
                    loading,
                    data,
                    userSearch
                }}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };