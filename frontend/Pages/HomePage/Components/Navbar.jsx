import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color0);
color: var(--color1);
-webkit-box-shadow: 0px 2px 15px -10px  var(--color1); 
box-shadow: 0px 2px 15px -10px var(--color1);
@media ${DeviceType.tablet} 
{
  display: block;
}
`;
 

const NameContainer = styled.div`
height: 100%;
width: 30%;
display: flex;
justify-content: left;
align-items: center;
text-align: center;
margin-left: 5%;
font-size: 1.5em;
@media ${DeviceType.tablet} 
{
  height: 50%;
  margin-left: 0%;
  justify-content: center;
  width: 100%;
}
`;

const LinkDiv = styled.div`
height: 100%;
width: 70%;
display: flex;
@media ${DeviceType.tablet} 
{
  height: 50%;
  width: 100%;
}
`;

const LinksContainer = styled.div`
height: 100%;
width: 25%;
margin-right: 5px;
display: flex;
justify-content: left;
align-items: center;
text-align: center;
margin-left: 10px;
font-size: 1.0em;
transition: 0.3s ;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
@media ${DeviceType.tablet} 
{
  
  justify-content: center;
  text-decoration: underline;

}
`;
const Navbar = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc2PMZKY4JY7j9M_BKv45upPyEJNJ6IwB-qSB8LXXqw7mHCNA/viewform?usp=sf_link"

    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
      const Scroll0 = () => {
        props.biographyRef.current?.scrollIntoView({behavior: 'smooth'});
      };
      const Scroll1 = () => {
        props.pubRef.current?.scrollIntoView({behavior: 'smooth'});
      };
      const Scroll2 = () => {
        props.talksRef.current?.scrollIntoView({behavior: 'smooth'});
      };
      
return(
    <Container>
        <NameContainer> Sumaya Nur Adan</NameContainer>
        <LinkDiv>
          <LinksContainer onClick={Scroll0}>Home</LinksContainer>
          <LinksContainer onClick={Scroll1}>Publications</LinksContainer>
          <LinksContainer onClick={Scroll2}>Talks</LinksContainer>
          <LinksContainer onClick={() =>OpenLink(formUrl)} >Consulting</LinksContainer>
        </LinkDiv>
    </Container>
)
}



export default Navbar