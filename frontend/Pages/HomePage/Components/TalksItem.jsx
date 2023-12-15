import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:block;
@media ${DeviceType.tablet} 
{
  font-size: 1.0em;
  margin-left: 5px;
}
`;

const TitleContainer = styled.p`
height: fit-content;
font-size: 2em;
margin-bottom: 5px;
color: #bbdefb;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover
{
    text-decoration   : underline ;
}
@media ${DeviceType.tablet} 
{
  font-size: 1.2em;
  margin-left: 5px;
}
`;
const DescriptionContainer = styled.div`
height: fit-content;
font-size: 1.2em;
margin-bottom: 5px;
margin-left: 5px;
@media ${DeviceType.tablet} 
{
  font-size: 1.0em;
  margin-left: 5px;
}
`;
const DateContainer = styled.div`
height: fit-content;
font-size: 1.0em;
margin-bottom: 5px;
margin-left: 5px;
color: grey;
@media ${DeviceType.tablet} 
{
  font-size: 0.8em;
  margin-left: 5px;
}
`;
 
const AuthorContainer = styled.div`
height: fit-content;
font-size: 1.0em;
margin-bottom: 5px;
color: grey;
font-weight: 600;
margin-left: 5px;
@media ${DeviceType.tablet} 
{
  font-size: 0.8em;
  margin-left: 5px;
}
`;
const TalksItem = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

return(
    <Container>
        <TitleContainer onClick={() =>OpenLink(props.url)}>{props.title}</TitleContainer>
        <DescriptionContainer>{props.description}</DescriptionContainer>
        <DateContainer>{props.year}</DateContainer>
        <AuthorContainer>{props.authors}</AuthorContainer>
    </Container>
)
}



export default TalksItem