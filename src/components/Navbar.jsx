import { AppBar, styled, Toolbar, Typography } from "@mui/material"

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#FF44FF", boxShadow: "none", height: "97px", justifyContent: "center" }}>
            <StyledToolbar>
                <Typography variant="h4" sx={{ fontFamily: 'Pattaya', color: "#333333" }}>
                    Image Galary
                </Typography>
            </StyledToolbar>
        </AppBar >
    )
}


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    margin: "0 150px 0 150px"
})

export default Navbar