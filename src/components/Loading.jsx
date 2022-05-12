import styled from "@emotion/styled"
import loading from '../utils/loading.svg'
const Loading = () => {
    return (
        <Wrapper>
            <img src={loading} alt="loading" />
            <h4>Loading some awesome Images...</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap ;
    img{
        width:300px ;
        height:300px
    }
    h4{
        font-weight:700;
        font-size:1.2rem ;
        color:#a7a7a7a7;
    }

    @media (max-width:353px){
        h4{
            font-size:1rem;
        }
    }
`
export default Loading