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
                    <Autocomplete className='autocomplete' freeSolo options={dummyData} renderInput={(params) => <TextField {...params} label="Search high resolution Images, categories, wallpapers" />} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top:97px;
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
            .autocomplete{
                background-color: #FFFFFF;
                width:55rem;
                border-radius: 5px;
            }
            h2{
                font-weight:700;
                font-size:32px;
            }
            p{
                font-weight:500 ;
                font-size:14px;
            }
        }
        @media (max-width:960px){
            .info{
                .autocomplete{
                    width:50rem;
                }
            }
        }
        @media (max-width:850px){
            .info{
                .autocomplete{
                    width:40rem;
                }
                h2{ 
                    font-size:29px ;
                }
            }
        }
        @media (max-width:716px){
            .info{
                .autocomplete{
                    width:35rem;
                }
                h2{
                    word-wrap:break-word;
                    font-size:24px ;
                }
            }
        }
        @media (max-width:630px){
            .info{
                .autocomplete{
                    width:28rem;
                }
                h2{
                    font-size:20px ;
                }
                p{
                    font-size:10px ;
                }
            }
        }
        @media (max-width:500px){
            .info{
                .autocomplete{
                    width:20rem;
                }
                h2{
                    font-size:20px ;
                }
                p{
                    font-size:10px ;
                }
            }
        }
        @media (max-width:460px){
            .info{
                .autocomplete{
                    width:16rem;
                }
                h2{
                    font-size:16px;
                }
            }
        }
        @media (max-width:365px){
            .info{
                .autocomplete{
                    width:13rem;
                }
                h2{
                    font-size:14px;
                }
                p{
                    font-size:8px ;
                }
            }
        }
        @media (max-width:320px){
            .info{
                .autocomplete{
                    width:10rem;
                }
                h2{
                    font-size:13px;
                }
                p{
                    font-size:7px ;
                }
            }
        }
}
`

export default Hero