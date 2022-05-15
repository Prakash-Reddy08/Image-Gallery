import styled from "@emotion/styled"
import { useGlobalContext } from "../context/context"

const NavLinks = () => {
    const { dark } = useGlobalContext();
    return (
        <Wrapper>
            <ul className={dark ? "dark" : ""}>
                <li>Explore</li>
                <li>Collection</li>
                <li>Community</li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ul{
        color: #333333;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 400px;
        font-weight: 700;
    }
    .dark{
        color:#FFFFFF;
    }

    @media (max-width:1330px){
        ul{
            width:300px ;
        }
    }

    @media (max-width:1176px){
        margin-top:1rem ;
        ul{
           flex-direction:column ;
           padding-left:0 ;
           width:auto;
           gap:1.5rem;
           li{
               display:flex ;
               justify-content:flex-start ;
           }
        }
    }

`

export default NavLinks