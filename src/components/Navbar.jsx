import { AppBar, Autocomplete, TextField, Toolbar, Typography } from "@mui/material"
import styled from '@emotion/styled'
const dummyData = ["HTML", "CSS", "javaScript", "TypeScript"];

const Navbar = () => {
    return (
        <Wrapper>
            <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF", boxShadow: "none", height: "97px", justifyContent: "center" }}>
                <StyledToolbar>
                    <div className="left">
                        <Typography variant="h4" sx={{ fontFamily: 'Pattaya', color: "#333333" }}>
                            Image Galary
                        </Typography>
                    </div>
                    <StyledMid>
                        <Autocomplete freeSolo sx={{ width: "419px" }} options={dummyData} renderInput={(params) => <TextField {...params} label="Search Images here" />} />
                        <StyledUL>
                            <li>Explore</li>
                            <li>Collection</li>
                            <li>Community</li>
                        </StyledUL>
                    </StyledMid>
                    <div className="right">
                        <StyledMode>
                            Dark Mode
                        </StyledMode>
                    </div>
                </StyledToolbar>
            </AppBar >
        </Wrapper>

    )
}


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
})

const StyledMid = styled("div")({
    display: "flex",
})
const StyledUL = styled("ul")({
    color: "#333333",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    fontWeight: "700",
})
const StyledMode = styled("div")({
    color: "#333333",
    fontWeight: "700",
})
const Wrapper = styled.div`

`


export default Navbar