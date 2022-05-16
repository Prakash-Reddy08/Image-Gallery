import { createContext, useContext, useState } from "react";
import useFetch from "../useFetch";
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [dark, setDark] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);
    const [search, setSearch] = useState("nature");
    const url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=RN5XslCt17tAeZ3G18C1m7c-Xze5v_LhP6VqXBVR45E&page=1`

    const { data, loading } = useFetch(url);


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