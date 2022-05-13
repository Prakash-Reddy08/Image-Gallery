import styled from "@emotion/styled"
import { Box, Modal as Mdl } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGlobalContext } from "../context/context";
import Button from "./Button";

const Modal = () => {
    const { modalOpen, closeModal, modalInfo, dark } = useGlobalContext();
    const userInsta = modalInfo?.user?.social?.instagram_username;
    const userTwitter = modalInfo?.user?.social?.twitter_username;
    return (
        <Mdl
            open={modalOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Wrapper>
                <Box className={dark ? "dark container" : "container"}>
                    <div className="top">
                        <img src={modalInfo?.urls?.regular} alt="img" />
                        <div className="buttons">
                            <div className="left">
                                <div className="share">
                                    <ShareOutlinedIcon />
                                    share
                                </div>
                                <div className="info">
                                    <InfoOutlinedIcon />
                                    info
                                </div>
                            </div>
                            <div className="right hide">
                                <Button />
                            </div>
                        </div>
                        <div className="close" onClick={closeModal}>
                            <CloseOutlinedIcon />
                        </div>
                    </div>
                    <div className={dark ? "bottom dark" : "bottom"}>
                        <div className="bottom_top">
                            <div className="bottom_top_left">
                                <div className="top_left">
                                    <img src={modalInfo?.user?.profile_image?.large} alt="img" />
                                    <div className="user_info">
                                        <h4>
                                            {modalInfo?.user?.name}
                                        </h4>
                                        <p>
                                            @{modalInfo?.user?.name}
                                        </p>
                                    </div>
                                </div>
                                {(userInsta || userTwitter) && <div className="user_socials">
                                    {userInsta && <div className="insta">
                                        <InstagramIcon className="small" />
                                        /{userInsta}
                                    </div>
                                    }
                                    {
                                        userTwitter && <div className="twitter">
                                            <TwitterIcon className="small" />
                                            /{userTwitter}
                                        </div>
                                    }
                                </div>}
                            </div>
                            <div className="bottom_top_right">
                                <div className="bottom_button">
                                    <Button />
                                </div>
                                <div className="like_count">
                                    <ThumbUpOutlinedIcon className="like" />
                                    <p>{modalInfo?.likes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom_tags">
                            <h4>Related Tags</h4>
                            {(modalInfo?.tags?.length > 0) ?
                                (<div className="grid_container">
                                    {
                                        modalInfo?.tags?.map((tag, index) =>
                                            <div key={index} className="title">
                                                {tag?.title}
                                            </div>
                                        )
                                    }
                                </div>)
                                :
                                (<div className="notags">
                                    No related Tags
                                </div>)
                            }
                        </div>
                    </div>
                </Box>
            </Wrapper>
        </Mdl>
    )
}

const Wrapper = styled.div`
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display:flex ;
        flex-direction:column ;
        height: 90%;
        min-width:900px;
        overflow: hidden;
        background-color: #fff;
        border-radius: 9px;
        &.dark{
            background-color:#141414 ;
        }
        .top{
            position:relative ;
            display:flex ;
            flex-direction:column ;
            height:70%;
            .close{
                position:absolute ;
                background-color:#ffffff;
                border-radius:50% ;
                cursor: pointer;
                right:0 ;
            }
            img{
                min-width:35vw ;
                width:100%;
                height:100%;
            }
            .buttons{
                width:100%;
                position:absolute ;
                display:flex ;
                justify-content:space-between ;
                top:85%;
                color:#ececec ;
                .left{
                    display:flex;
                    margin-left:17px ;
                    .share,.info{
                        display:flex ;
                        align-items:center ;
                        justify-content:center ;
                        border:1px solid #ececec;
                        margin-right:10px;
                        padding:6px 9px;
                        border-radius:4px;
                    }
                }
                .right{
                    margin-right: 17px;
                }
            }
        }
        .bottom{
            margin:10px 25px 0 25px;
            &.dark{
                color:#e5e5e5e5 ;
            }
            .bottom_top{
                display:flex ;
                justify-content:space-between ;
                .bottom_top_left{
                    display:flex ;
                    align-items:center ;
                    flex-wrap:wrap ;
                    .top_left{
                        display:flex ;
                        align-items:center ;
                        flex-wrap:wrap ;
                    }
                    img{
                        width:56px ;
                        height:56px ;
                        border-radius:50%;
                    }
                    .user_info{
                        margin-left:10px;
                        padding:0;
                        h4{
                            margin-bottom:-10px ;
                        }
                    }
                    .user_socials{
                        display:flex;
                        flex-wrap:wrap;
                        margin-left:15px;
                        .insta{
                            display:flex ;
                            margin-right:12px ;
                        }
                        .twitter{
                            display:flex ;
                        }
                    }
                }
                .bottom_top_right{
                    display:flex ;
                    align-items:center ;
                    .like_count{
                        display:flex ;
                        justify-content:space-between ;
                        align-items:center ;
                    }
                    .bottom_button{
                        display:none ;
                    }
                    p{
                        margin-left: 5px;
                    }
                }
            }
            .bottom_tags{
                width:100% ;
                .grid_container{
                    display:flex ;
                    flex-wrap:wrap ;
                    flex-direction:row ;
                    gap:1.6rem;
                }
                .title{
                    font-weight:500 ;
                    padding:5px ;
                    border-radius:4px ;
                    color:#4f4f4f ;
                    background-color:#ECECEC;
                }
            }
        }
    }

    @media (max-width:1024px){
        .container{

            min-width: 700px;
            .top{
                height: 60%;
            }
        }
    }
    @media (max-width:768px){
        .container{
            min-width: 600px;
            height:95% ;
            .top{
                height: 60%;
            }
        }
    }
    @media (max-width:719px){
        .container{
            min-width: 500px;
        }
    }
    @media (max-width:768px){
        .container{
            min-width: 500px;
        }
    }
    @media (max-width:541px){
        .container{
            min-width: 400px;
        }
    }
    @media (max-width:418px){
        .container{
            min-width: 360px;
            .top{
                .buttons{
                    justify-content:flex-end ;
                    .hide{
                        display:none ;
                    }
                }
            }
            .bottom{
                .bottom_top{
                    .bottom_top_left{
                        .top_left{
                        img{
                            width:46px;
                            height:46px;
                        }
                        .user_info{
                            font-size:11px ;
                        }
                    }
                    .user_socials{
                        .insta,.twitter,.small{
                            font-size:10px;
                        }
                    }
                    }
                    .bottom_top_right{
                        display:flex ;
                        flex-direction:column ;
                        justify-content:space-between ;
                        align-items:center ;
                        .bottom_button{
                            display:block;
                        }
                        .like_count,.like{
                            font-size:10px ;
                        }
                    }
                }
                .bottom_tags{
                .grid_container{
                    gap:1rem;
                }
                h4{
                    font-size:14px ;
                }
                .title{
                    font-weight:500 ;
                    padding:5px ;
                    font-size:9px;
                    border-radius:4px ;
                    color:#4f4f4f ;
                    background-color:#ECECEC;
                }
            }
        }
    }
    }
    @media (max-height:620px){
        .container{
            .top{
                height: 60%
            }
        }
    }
`

export default Modal