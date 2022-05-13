import styled from "@emotion/styled"
import { Box, Modal as Mdl } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useGlobalContext } from "../context/context";
import Button from "./Button";

const Modal = () => {
    const { modalOpen, closeModal, modalInfo } = useGlobalContext();
    return (
        <Mdl
            open={modalOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Wrapper>
                <Box className="container">
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
                            <div className="right">
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottom_top">
                            <div className="bottom_top_left">
                                <img src={modalInfo?.user?.profile_image?.large} alt="img" />
                                <div className="user_info">
                                    <h4>
                                        {modalInfo?.user?.name}
                                    </h4>
                                    <p>
                                        @{modalInfo?.user?.name}
                                    </p>
                                </div>
                                <div className="user_socials">
                                    {modalInfo?.user?.social?.instagram_username && <div className="insta">
                                        <InstagramIcon fontSize="small" />
                                        /{modalInfo?.user?.social?.instagram_username}
                                    </div>}
                                    {modalInfo?.user?.social?.twitter_username && <div className="twitter">
                                        <TwitterIcon />
                                        /{modalInfo?.user?.social?.twitter_username}
                                    </div>}
                                </div>
                            </div>
                            <div className="bottom_top_right">
                                <ThumbUpOutlinedIcon />
                                <p>{modalInfo?.likes}</p>
                            </div>
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
        overflow: hidden;
        background-color: #fff;
        border-radius: 9px;
        .top{
            position:relative ;
            display:flex ;
            flex-direction:column ;
            height:70%;
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
            .bottom_top{
                .bottom_top_left{
                    img{
                        width:56px ;
                        height:56px ;
                        border-radius:50%;
                    }
                    
                }
            }
        }
    }
`

export default Modal