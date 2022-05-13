import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [dark, setDark] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const toggleDarkMode = () => {
        setDark(!dark);
    }

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <AppContext.Provider
            value={
                {
                    dark,
                    toggleDarkMode,
                    modalOpen,
                    openModal,
                    closeModal
                }}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };