import styled from "@emotion/styled";
import { photos } from "../photosData.js";
import Card from "./Card.jsx";
const Images = () => {
    return (
        <Wrapper>
            <div className="grid_container">
                {
                    photos.map((photo) => {
                        return <Card image={photo} key={photo.id} />
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        padding: 50px 0 ;
        display:flex ;
        justify-content:center;
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