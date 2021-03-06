import { AppBar, Autocomplete, TextField, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled'
import { useGlobalContext } from "../context/context";
import { useState } from "react";
import DarkMode from "./DarkMode";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import useFetch from "../useFetch";
import FilterSuggestions from "../utils/FilterSuggestions";

const Navbar = () => {
    const { userSearch, theme } = useGlobalContext();
    const [userInput, setUserInput] = useState("");
    const url = `https://api.unsplash.com/search/photos/?query=${userInput}&client_id=RN5XslCt17tAeZ3G18C1m7c-Xze5v_LhP6VqXBVR45E&page=1`

    const debounce = (cb, delay = 1000) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    const updateQuery = e => setUserInput(e?.target?.value)

    const debounceOnChange = debounce(updateQuery, 900)

    const { data } = useFetch(url);
    const suggestions = FilterSuggestions(data);
    return (
        <Wrapper theme={theme}>
            <AppBar position="fixed" sx={{ backgroundColor: `${theme.background}`, boxShadow: "none", height: "97px", justifyContent: "center" }}>
                <Toolbar className="toolbar">
                    <div className="left">
                        <Typography className="logo" variant="h4" sx={{ fontFamily: 'Pattaya', color: `${theme.color}` }}>
                            Image Galary
                        </Typography>
                    </div>
                    <div className="mid">
                        <Autocomplete onChange={(e, value) => userSearch(value)}
                            sx={{ width: "419px", backgroundColor: `${theme.background}` }}
                            options={suggestions || []} renderInput={(params) =>
                            (<TextField
                                sx={{ input: { backgroundColor: `${theme.background}`, color: `${theme.color}`, } }}
                                value={userInput}
                                onChange={debounceOnChange} {...params} label="Search Images here"
                            />)}

                        />
                        <div className="links">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="right">
                        <DarkMode />
                    </div>
                    <div className="hamb_seach">
                        <SearchIcon className="search" fontSize="large" />
                        <Hamburger />
                    </div>
                </Toolbar>
            </AppBar >
        </Wrapper>

    )
}


const Wrapper = styled.div`
    .toolbar{
        display: flex;
        justify-content: space-evenly;
        .right,.hamb_seach{
            color:${(props) => props.theme.color};
        }
    }
    .mid{
        display: flex;
    }

    .hamb_seach{
        display:none;
    }

    @media (max-width:1300px){
        .right{
            display:none;
        }
        .hamb_seach{
            display:block ;
            color:#4F4F4F ;
            .search{
                display:none ;
            }
        }
    }
    @media (max-width:1176px){
        .mid {
            .links{
                display:none; 
            }
        }
    }
    @media (max-width:780px){
        .toolbar{
            justify-content:space-around ;
            align-items:center ;
        }
        .mid{
            display:none ;
        }
        .hamb_seach{
            display:flex ;
            align-items:center ;
            justify-content:space-between ;
            .search{
                margin-right:1rem ;
                display:inline;
            }
        }
        
    }
    @media (max-width:460px){
        .logo{
            font-size: 30px;
        }
        .hamb_seach{
            .search,.ham{
                font-size:1.7rem ;
            }
        }
        
    }
    @media (max-width:330px){
        .logo{
            font-size: 26px;
        }
        .hamb_seach{
            .search,.ham{
                font-size:1.5rem ;
            }
        }
        
    }
`


export default Navbar