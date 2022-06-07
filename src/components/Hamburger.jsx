import styled from "@emotion/styled"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useGlobalContext } from "../context/context";
import { useEffect, useRef, useState } from "react";
import DarkMode from "./DarkMode";
import NavLinks from "./NavLinks";

const Hamburger = () => {
    const { theme } = useGlobalContext();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <Wrapper theme={theme}>
            <Stack direction="row" spacing={2}>
                <div>
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MenuOutlinedIcon sx={{ color: `${theme.color}` }} fontSize="large" />
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}

                            >
                                <Paper style={{ backgroundColor: `${theme.background}` }}>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                            className="menuitems"
                                        >
                                            <MenuItem className="display_darkmode_btn"><DarkMode /></MenuItem>
                                            <MenuItem className="display_navLinks"><NavLinks /></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        cursor: pointer;
        color:black ;
        .menuItems{
            display:flex;
            flex-direction:column;
            height:auto ;
            background-color:${(props) => props.theme.background} ;
        }
        .display_darkmode_btn,.display_navLinks{
            display:none;
        }
        @media (max-width:1300px){
            .display_darkmode_btn{
                display:inline-block ;
            }
        }
        @media (max-width:1176px){
            .display_navLinks{
                display:flex;
            }
        }
`

export default Hamburger