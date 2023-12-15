import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import TalksItem from './TalksItem';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color0);
color: var(--color1);
@media ${DeviceType.tablet} 
{
  display: block;
}
`;
 
const LeftContainer = styled.div`
height :100%;
width: 40%;
margin-top: 1%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :20%;
    width: 100%;
}
`;

const TitleText = styled.div`
margin-top: 5%;
height:fit-content;
width: 100%;
text-align: center;
font-size: 50px;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    font-size: 1.5em;
}
`;

const RightContainer = styled.div`
margin-top: 1%;
height :100%;
width: 60%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :80%;
    width: 100%;
}
`;

const TalksContainer = styled.div`
height: fit-content;
width: 100%;
margin-bottom: 30px;

`;
const Talks = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LeftContainer>
            <TitleText>
                Recent & <br/>Upcoming Talks
            </TitleText>
            
        </LeftContainer>
        <RightContainer>
        {
            TalksList.map(function(data)
            {
                return (
                <TalksContainer> <TalksItem authors = {data.authors} year = {data.year} title = {data.title} description = {data.description} url = {data.url}/></TalksContainer>
            )
        })}
        </RightContainer>
    </Container>
)
}

export default Talks;

const TalksList = [
    {
        "authors": "Sumaya Nur Adan",
        "year" : "21st November 2023",
        "title" : "The Future of AI Governance",
        "description" : "Panel Discussion at Durham University",
        "url" : "https://www.linkedin.com/feed/update/urn:li:activity:7131252187271172096/"
    }
    ,
    {
    "authors": "Sumaya Nur Adan",
    "year" : "6-10 March 2023, 15-19 May 2023",
    "title" : "Convention on Prohibitions or Restrictions on the Use of Certain Conventional Weapons ",
    "description" : "Panel Discussion in Geneva",
    "url" : "https://docs-library.unoda.org/Convention_on_Certain_Conventional_Weapons_-Group_of_Governmental_Experts_on_Lethal_Autonomous_Weapons_Systems_(2023)/CCW-GGE.1-2023-INF.1_List_of_participants.pdf"
    }
    
];
