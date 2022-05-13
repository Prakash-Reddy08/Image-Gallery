import { AppBar, Autocomplete, Switch, styled as style, TextField, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled'
import { useGlobalContext } from "../context/context";
import { useEffect, useState } from "react";
const dummyData = ["HTML", "CSS", "javaScript", "TypeScript"];

const Navbar = () => {
    const { dark, toggleDarkMode } = useGlobalContext();
    const [userInput, setUserInput] = useState("");

    // useEffect(() => {
    //     const url = ``
    // },[userInput])

    return (
        <Wrapper>
            <AppBar position="fixed" sx={{ backgroundColor: `${dark ? "#232323" : "#FFFFFF"}`, boxShadow: "none", height: "97px", justifyContent: "center" }}>
                <Toolbar className={dark ? "toolbar dark" : "toolbar"}>
                    <div className="left">
                        <Typography className="logo" variant="h4" sx={{ fontFamily: 'Pattaya', color: `${dark ? "#FFFFFF" : "#333333"}` }}>
                            Image Galary
                        </Typography>
                    </div>
                    <div className={dark ? "mid dark" : "mid"} >
                        <Autocomplete onChange={(e, value) => console.log(value)} sx={{ width: "419px", backgroundColor: `${dark ? "#4f4f4f" : "#FFFFFF"}` }} options={dummyData} renderInput={(params) => <TextField value={userInput} onChange={(e) => setUserInput(e.target.value)} {...params} label="Search Images here" />} />
                        <ul className="ul">
                            <li>Explore</li>
                            <li>Collection</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="right">
                        Dark Mode
                        <MaterialUISwitch onChange={toggleDarkMode} />
                    </div>
                    <div className="hamb_seach">
                        <SearchIcon className="search" fontSize="large" />
                        <MenuOutlinedIcon className="ham" fontSize="large" />
                    </div>
                </Toolbar>
            </AppBar >
        </Wrapper>

    )
}

const MaterialUISwitch = style(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const Wrapper = styled.div`
    .toolbar{
        display: flex;
        justify-content: space-evenly;
    }
    .mid{
        display: flex;
    }
    .ul{
        color: #333333;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 400px;
        font-weight: 700;
    }
    .right{
        color: #333333;
        font-weight: 700;
    }
    .dark{
        .ul,.right,.hamb_seach{
            color:#FFFFFF;
        }
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
        .mid{
            .ul{
                display:none ;
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