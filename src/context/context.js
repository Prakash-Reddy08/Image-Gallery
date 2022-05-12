import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [dark, setDark] = useState(false);

    const toggleDarkMode = () => {
        setDark(!dark);
    }

    return (
        <AppContext.Provider value={{ dark, toggleDarkMode }}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };