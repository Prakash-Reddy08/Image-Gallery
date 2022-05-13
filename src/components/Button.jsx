import { Button as Btn } from '@mui/material';
const Button = () => {
    return (
        <Btn variant="contained" sx={{
            backgroundColor: "#3CB46E", "&:hover": { backgroundColor: "#3CB46E" }, fontWeight: "700", fontSize: "10px", width: "157px", height: "39px", letterSpacing: "1px"
        }}>
            Download Image
        </Btn >
    )
}


export default Button