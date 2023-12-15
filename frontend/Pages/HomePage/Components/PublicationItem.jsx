import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { faBookBookmark, faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 90%;
display:flex;
color: var(--color1);
align-items: left;
justify-content: left;
text-align: left;
font-size: 1.2em;
@media ${DeviceType.tablet} 
{
  font-size: 1.0em;
  margin-left: 10px;
}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: grey;
margin-top: 3px;
`;

const PublicationItem = (props) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
return(
    <Container>
       <span>
        <span><StyledFontAwesomeIcon icon={faBookBookmark}/> </span>
        <span style={{ color: 'grey', marginLeft:'5px', marginRight:'5px'}}>{props.authors} </span>
        ({props.year}).
        <span onClick={() =>OpenLink(props.url)} style={{ color: '#bbdefb',cursor: 'pointer', textDecoration:'underline',marginLeft:'5px'}}>{props.title}. </span>
          {props.journal}
       </span>
    </Container>
)
}

export default PublicationItem

