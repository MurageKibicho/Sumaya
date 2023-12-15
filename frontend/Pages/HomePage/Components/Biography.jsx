import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGraduationCap, faMailBulk, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { DeviceType } from '../../../responsive';


const Container = styled.div`
height: 100%;
width: 100%;
display:block;
background-color: var(--color0);
color: var(--color1);
display: flex;
@media ${DeviceType.tablet} 
{
    display: block;
}
`;

const LeftContainer = styled.div`
width: 40%;
height: 100%;
display: block;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 2%;
@media ${DeviceType.tablet} 
{
    width: 100%;
    height: 30%;
    margin-top: 0%;
}
`;
 
const RightContainer = styled.div`
width: 60%;
height: 100%;
display: block;
margin-top: 2%;
@media ${DeviceType.tablet} 
{
    width: 100%;
    height: 70%;
    margin-top: 0%;
}
`;

const ProfilePictureContainer = styled.div`
width: 80%;
height: 50%;
margin-left: 10%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media ${DeviceType.tablet} 
{
}
`;
    


const ProfilePicture = styled.div`
height : 200px;
width: 200px;
border-radius: 200px;
background: ${(props) => `url(https://media.licdn.com/dms/image/D4D03AQEjUxxcm5AvPA/profile-displayphoto-shrink_800_800/0/1676206947640?e=1707955200&v=beta&t=uVUaq7jWN79XOLhHMVl7gQcHxtTL423C9BLnqSNMUUM)`};
background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
@media ${DeviceType.tablet} 
{
    margin-top:10%;
}
`;

const NameContainer = styled.div`
height : fit-content;
width: 100%;
margin-top: 15px;
font-size: 1.7em;
@media ${DeviceType.tablet} 
{
    margin-top: 15px;
    font-size: 1.5em;
}
`;

const TitleContainer = styled.div`
height : fit-content;
width: 100%;
margin-top: 15px;
color: grey;
font-weight: 300;
font-size: 1.2em;
@media ${DeviceType.tablet} 
{
    margin-top: 5px;
    font-size: 1.0em;
}
`;

const WebsiteContainer = styled.div`
height : fit-content;
margin-top: 15px;
font-size: 1.2em;
width: 100%;
color: #bbdefb;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
@media ${DeviceType.tablet} 
{
    margin-top: 5px;
    font-size: 1.0em;
}
`;

const IconsContainer = styled.div`
height: 50px;
width: 100%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #bbdefb;
margin-left: 2%;
font-size: 2rem;
margin-top: 3%;
margin-left: 30px;
cursor: pointer;
&:hover {
    color: #8dc6f5;
}
`;

const ResumeIcon = styled(FontAwesomeIcon)`
color: white;
font-size:1.2rem;
margin-left: 30px;
margin-right: 10px;
cursor: pointer;
&:hover {
    color: #8dc6f5;
}
`;

const BiographyTitle = styled.div`
font-size: 3rem;
margin-bottom: 20px;
@media ${DeviceType.tablet} 
{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
}
`;

const BiographyTextContainer = styled.div`
font-size: 1.4rem;
height: fit-content;
width: 95%;
@media ${DeviceType.tablet} 
{
    margin-left: 15px;
    font-size: 1.1rem;
    margin-bottom: 10px;
}
`;

const DownloadResumeContainer = styled.div`
display: flex;
align-items: bottom;
font-size: 1.2rem;
height: fit-content;
width: 100%;
`;

const ResumeContainer = styled.div`
height : fit-content;
width: fit-content;
margin-left: 5px;
color: #bbdefb;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
`;

const InterestsEducationContainer = styled.div`
height : 25%;
width: 100%;
display: flex;
margin-top: 20px;
@media ${DeviceType.tablet} 
{
    margin-top: 10px;
}
`;

const InterestsEducationTitle = styled.div`
height : fit-content;
width: 100%;
display: flex;
margin-top: 40px;
font-weight: 800;
font-size: 1.5em;
margin-bottom: 20px;
@media ${DeviceType.tablet} 
{
    margin-top: 10px;
    font-weight: 800;
    font-size: 1.5em;
    margin-bottom: 5px;
}
`; 

const InterestsContainer = styled.div`
height : 100%;
width: 50%;
display: block;
`;

const EducationContainer = styled.div`
height : 100%;
width: 50%;
display: block;
`;

const EducationItemContainer = styled.div`
height : 30%;
width: 100%;
display: flex;
`;

const MainEducationContainer = styled.div`
height : 100%;
width: 100%;
display: block;
`;
const DegreeContainer = styled.div`
height : 50%;
width: 100%;
display: flex;

`;

const SchoolContainer = styled.div`
height : 50%;
width: 100%;
display: flex;
color: grey;
`;

const EducationIcon = styled(FontAwesomeIcon)`
color: grey;
font-size: 1.2rem;
margin-top: 5px;
margin-right: 5px;
`;

const StyledLine = styled.li`
margin-bottom: 15px;
font-size: 1.2em;
`;
const Biography = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const mastercardLink = 'https://www.mastercardfoundation.fund.cam.ac.uk/staff/sumaya-nur-adan';
    const emailLink = "mailto:mmm71@cam.ac.uk";
    const twitterLink = "https://twitter.com/SumayaNur_";
    const linkedinLink = "https://www.linkedin.com/in/sumaya-nur-adan-20ba22165/";
    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
return(
    <Container>
        <LeftContainer>
            <ProfilePictureContainer><ProfilePicture/></ProfilePictureContainer>
            <NameContainer>Sumaya Nur</NameContainer>
            <TitleContainer>Senior Research Fellow (Law & AI)</TitleContainer>
            <WebsiteContainer onClick={() =>OpenLink(mastercardLink)}>Mastercard Foundation Scholar</WebsiteContainer>
            <IconsContainer>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(emailLink)} icon={faEnvelope}/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(twitterLink)} icon={faTwitter}/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(linkedinLink)} icon={faLinkedin}/>
            </IconsContainer>
        </LeftContainer>

        <RightContainer>
            <BiographyTitle>Biography</BiographyTitle>
            <BiographyTextContainer>
                {text0}
                <br/><br/>
                {text1}
                <br/><br/>
                {text2}
                <br/><br/>
            </BiographyTextContainer>
            <DownloadResumeContainer>
                <ResumeIcon  icon={faDownload}/>
                Download my  <ResumeContainer>resumé.</ResumeContainer>
            </DownloadResumeContainer>

            <InterestsEducationContainer>
                <InterestsContainer>
                    <InterestsEducationTitle>Interests</InterestsEducationTitle>
                    <ul>
                        <StyledLine>Artificial Intelligence Governance</StyledLine>
                        <StyledLine>Effects of AI on International Law</StyledLine>
                        <StyledLine>Existential risk mitigation</StyledLine>
                    </ul>
                </InterestsContainer>
                <EducationContainer>
                    <InterestsEducationTitle>Education</InterestsEducationTitle>
                    <EducationItemContainer>
                        <EducationIcon  icon={faGraduationCap}/>
                        <MainEducationContainer>
                            <DegreeContainer>Masters in Philosophy</DegreeContainer>
                            <SchoolContainer>University of Cambridge</SchoolContainer>
                        </MainEducationContainer>
                    </EducationItemContainer>

                    <EducationItemContainer>
                        <EducationIcon  icon={faSchool}/>
                        <MainEducationContainer>
                            <DegreeContainer>Strathmore University</DegreeContainer>
                            <SchoolContainer>Bachelor of Laws</SchoolContainer>
                        </MainEducationContainer>
                    </EducationItemContainer>

                    <EducationItemContainer>

                    </EducationItemContainer>
                </EducationContainer>
            </InterestsEducationContainer>
        </RightContainer>
    </Container>
)
}

const text0 = "Sumaya Nur Adan is an AI governance researcher pursuing an MPhil in Ethics of AI, Data, and Algorithms at the University of Cambridge.";
const text1 = "She promotes responsible and sustainable use of AI and has actively contributed to this through her work at organizations such as the Centre for the Study of Existential Risks and the Campaign To Stop Killer Robots.";
const text2 = "Her research covers facial recognition algorithms, AI liability, autonomous weapon systems, and China-Africa digital relations. Sumaya aims to shape AI policy and create a positive impact in Africa and the world.";


export default Biography