import React,{useRef} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import Biography from './Components/Biography';
import Publications from './Components/Publications';
import Talks from './Components/Talks';
import Contact from './Components/Contact';
import { DeviceType } from '../../responsive';


const Container = styled.div`
height: 250vh;
width: 100vw;
display:block;
`;

const NavBarContainer = styled.div`
height: 100px;
position: sticky;
top: 0;
@media ${DeviceType.tablet} 
{
    height: 80px;
}
`;

const BiographyContainer = styled.div`
height: 120vh;
width:100vw;
background-color: var(--color0);
@media ${DeviceType.tablet} 
{
    height: 200vh;
}
`;

const PublicationsContainer = styled.div`
height: 60vh;
width:100vw;
background-color: white;
@media ${DeviceType.tablet} 
{
    height: 70vh;
}
`;

const TalksContainer = styled.div`
height: 60vh;
width:100vw;
background-color: var(--color0);
`;

const ContactContainer = styled.div`
height: 10vh;
width:100vw;
background-color: white;
`;



 
const Home = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const biographyRef = useRef(null);
    const pubRef = useRef(null);
    const talksRef = useRef(null);
    const contactRef = useRef(null);
return(
    <Container>
        <NavBarContainer ><Navbar biographyRef = {biographyRef} pubRef = {pubRef} talksRef = {talksRef} /></NavBarContainer>
        <BiographyContainer ref={biographyRef} ><Biography/></BiographyContainer>
        <PublicationsContainer ref={pubRef} ><Publications/></PublicationsContainer>
        <TalksContainer ref={talksRef} ><Talks/></TalksContainer>
        <ContactContainer ref={contactRef} ><Contact/></ContactContainer>
    </Container>
)
}



export default Home