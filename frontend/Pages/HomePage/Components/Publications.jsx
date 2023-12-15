import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import PublicationItem from './PublicationItem';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color2);
color: white;
@media ${DeviceType.tablet} 
{
  display: block;
}
`;
 
const LeftContainer = styled.div`
height :100%;
width: 40%;
margin-top: 3%;
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
margin-top: 5%;
height :100%;
width: 60%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :80%;
    width: 100%;
}
`;

const PublicationsContainer = styled.div`
height: fit-content;
width: 100%;
margin-bottom: 10px;
`;
const Publications = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LeftContainer>
            <TitleText>
                Recent <br/>Publications
            </TitleText>
            
        </LeftContainer>
        <RightContainer>
        {
            PublicationList.map(function(data)
            {
                return (
                <PublicationsContainer> <PublicationItem authors = {data.authors} year = {data.year} title = {data.title} journal = {data.journal} chip = {data.chip}/></PublicationsContainer>
            )
        })}
        </RightContainer>
    </Container>
)
}

export default Publications;

const PublicationList = [
{
"authors": "Cecil Abungu, Michelle Malonza, Sumaya Nur Adan",
"year" : "2023",
"title" : "Can apparent bystanders distinctively shape an outcome? Global south countries and global catastrophic risk-focused governance of artificial intelligence",
"journal" : "Arxiv",
"chip" : "Arxiv",
"url" : "https://arxiv.org/abs/2312.04616"
},
{
    "authors": "Sumaya Nur Adan",
    "year" : "2023",
    "title" : "The Case for Including the Global South in AI Governance Discussions",
    "journal" : "Centre for the Governance of AI",
    "chip" : "PDF",
    "url" : "https://www.governance.ai/post/the-case-for-including-the-global-south-in-ai-governance-conversations"
},
{
    "authors": "Sumaya Nur Hussein",
    "year" : "2022",
    "title" : "Win-win or win lose? An examination of China's supply of mass surveillance technologies in exchange for African's facial IDs",
    "journal" : "Pretoria Student Law Review",
    "chip" : "PDF",
    "url" : "https://www.pulp.up.ac.za/edocman/journals/2022_PSLR/Chapter%205%20Sumaya%20Hussein%202022.pdf"
}
];
