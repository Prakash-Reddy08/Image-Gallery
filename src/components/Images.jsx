import styled from "@emotion/styled";
import { useGlobalContext } from "../context/context.js";
import { photos } from "../photosData.js";
import Card from "./Card.jsx";

const Images = () => {
    const { dark } = useGlobalContext();
    return (
        <Wrapper>
            <div className={dark ? "grid dark" : "grid"}>

                <div className={dark ? "grid_container dark" : "grid_container"}>
                    {
                        photos.map((photo) => {
                            return <Card image={photo} key={photo.id} />
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        .grid{
            display:flex ;
            justify-content: center;
            padding: 50px 0 ;
            &.dark{
                background-color:#232323;
            }
        }
        .grid_container{
            width:80%;
            margin:0 150px ;
            display: grid;
            grid-template-columns:repeat(3,minmax(240px,1fr)) ;
            grid-gap:2rem;
        }

        
    @media (max-width:915px){
        .grid_container{
            width:100% ;
        }   
    }
    @media (max-width:850px){
        .grid_container{
            grid-template-columns:repeat(2,minmax(320px,1fr)) ;
        }   
    }
    @media (max-width:720px){
        .grid_container{
            grid-template-columns:repeat(2,minmax(250px,1fr)) ;
        }   
    }
    @media (max-width:550px){
        .grid_container{
            grid-template-columns:repeat(1,minmax(390px,1fr)) ;
        }   
    }
    @media (max-width:420px){
        .grid_container{
            grid-template-columns:repeat(1,minmax(290px,1fr)) ;
        }   
    }
`

export default Images