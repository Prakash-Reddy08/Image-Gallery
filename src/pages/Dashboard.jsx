import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import styled from "@emotion/styled"
import Loading from "../components/Loading";
import Images from "../components/Images";

const loading = false;

const Dashboard = () => {
    if (loading) {
        return (
            <Wrapper>
                <Navbar />
                <Loading />
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Navbar />
            <Hero />
            <Images />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#E5E5E5 ;
`
export default Dashboard