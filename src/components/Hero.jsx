import styled from '@emotion/styled';
import { Autocomplete, TextField } from '@mui/material';
import hero from '../utils/hero.png';

const dummyData = [];

const Hero = () => {
    return (
        <Wrapper>
            <div className="heroContainer" >
                <div className="img">
                    <img src={hero} alt="hero" />
                </div>
                <div className="info">
                    <h2>Download High Quality Images by creators</h2>
                    <p>Over 2.4 million+ stock Images by our talented community</p>
                    <Autocomplete freeSolo sx={{ width: "808px", backgroundColor: "#FFFFFF", borderRadius: "5px" }} options={dummyData} renderInput={(params) => <TextField {...params} label="Search high resolution Images, categories, wallpapers" />} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .heroContainer{
        position: relative;
        min-height:384px;
        img{
            position:absolute;
            background-size:cover;
            height:100% ;
            width:100%;
        }
        .info{
            width:100% ;
            height:100% ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;
            position:absolute;
            color:#FFFFFF ;
            h2{
                font-weight:700;
                font-size:32px;
                margin-bottom: 0;
            }
            p{
                font-weight:500 ;
                font-size:14px;
            }
        }
}
`

export default Hero