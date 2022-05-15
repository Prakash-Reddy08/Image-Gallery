import React from 'react'
import styled from '@emotion/styled';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useGlobalContext } from '../context/context';
import formatNumber from '../utils/FormatNumbers';

const Card = ({ image }) => {
    const { dark, openModal, Modaldata } = useGlobalContext();
    return (
        <Wrapper>
            <div onClick={() => {
                Modaldata(image);
                openModal();
            }}
                className={image.width > image.height ? "card card_wide" : "card card_tall"}>
                <div className="card">
                    <img src={image.urls.small} alt="dkasj" />
                    <div className={dark ? "info dark" : "info"}>
                        <div className="left">
                            <img src={image.user.profile_image.small} alt={image.user.username} />
                            <div className={dark ? "dark user" : "user"}>
                                <div className={dark ? "dark name" : "name"}>
                                    {image.user.name}
                                </div>
                                <div className={dark ? "dark username" : "username"}>
                                    @{image.user.username}
                                </div>
                            </div>
                        </div>
                        <div className={dark ? "dark right" : "right"}>
                            <ThumbUpOutlinedIcon className='like' />
                            <p>{formatNumber(image.likes)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.card_wide{
    grid-column:span 2;
}
.card_tall{
    grid-row:span 2;
}
.card{
    cursor: pointer;
    display:grid ;
    flex-direction:column;
        border-radius: 8px;
        overflow:hidden;
        img{
            width:100%;
            height:100%;
        }
    }
    .info{
        background-color:#FFFFFF ;
        min-height: 5rem;
        padding:0.7rem ;
        display: flex;
        align-items:center ;
        justify-content:space-between ;
        flex-wrap:nowrap ;
    }
    .left{
        display:flex;
        align-items:center ;
        justify-content: space-between;
        img{
            width:40px ;
            height:40px ;
            border-radius:50% ;
        }
        .user{
            margin-left:0.7rem ;
            .name{
                font-weight:700 ;
                color:#4f4f4f;
            }
            .username{
                font-family: 'Poppins', sans-serif;
                margin-top:3px ;
                font-weight:600 ;
                max-width:110px ;
                word-wrap:break-word ;
                color:#a7a7a7;
            }
        }
    }

    .right{
        display:flex ;
        justify-content:space-between ;
        align-items:center;
        color:#4f4f4f;
        p{
            margin-left: 5px;
        }
    }
    .dark{
        background-color:#141414 ;
        color:#e5e5e5;
    }

    @media (max-width:1172px){
        .user{
            .name,.username{
                font-size:12px ;
            }
        }
        .right,.like{
            font-size:13px ;
        }
    }

`

export default Card