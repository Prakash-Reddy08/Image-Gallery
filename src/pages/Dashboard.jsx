import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import styled from "@emotion/styled"
import Loading from "../components/Loading";
import Images from "../components/Images";
import Modal from "../components/Modal";

const loading = false;
const modal = true;
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
            {modal && <Modal />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#E5E5E5 ;
`
export default Dashboard