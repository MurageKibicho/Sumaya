import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color2);
align-items: center;
justify-content: center;
`;

const ContactButton = styled.div`
height: 30%;
width: 15%;
display:flex;
border: 2px solid black;
border-radius: 5px;
background-color: ${(props) => `${props.backColor}`};
color: ${(props) => `${props.color}`};
padding: 14px 28px;
font-size: 0.8em;
cursor: pointer;
align-items: center;
text-align: center;
justify-content: center;
transition: all 0.3s ease-in-out;
margin-right: 2%;
font-size: 1.3em;
&:hover
{
    background-color: white;
    color: grey;
}
`;
 
const Contact = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc2PMZKY4JY7j9M_BKv45upPyEJNJ6IwB-qSB8LXXqw7mHCNA/viewform?usp=sf_link"
    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return(
    <Container>
        <ContactButton backColor = "white" color='black' onClick={() =>OpenLink(formUrl)}> Book here</ContactButton>
    
    </Container>
)
}



export default Contact