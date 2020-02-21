import React from 'react';
import styled from "styled-components";
import {Col} from 'reactstrap';

const Card = styled.div`
display: flex;
background-color: rgba(225, 225, 225, 0.5);
border: black solid 1px;
width: 30%;
flex-direction: column;
border-radius: 20px;
margin 10px;
`;
const CardBody = styled.body`
background-color: white;
border: black solid 1px;
width: 100%
`;
const CardHeader = styled.h1`
width: 100%
`;
const CardText = styled.h2`
width: 100%
`;
const CardFooter =  styled.footer`
width: 100%;
margin: 10px 0px;
`
const CharCard = ({data}) => {
    return(
     <Col xs="6" md="4" xl="3">
        <Card>
            <CardHeader>{data.name}</CardHeader>
            <CardBody>
                <CardText>Films appeared in: {data.films.length}</CardText>
                <p>Appearance</p>
                <CardText>Height: {data.height}</CardText>
                <CardText>Hair color: {data.hair_color}</CardText>
                <CardText>Skin color: {data.skin_color}</CardText>
                <CardText>Eye color:{data.eye_color}</CardText>
            </CardBody>
                <CardFooter>Date of birth: {data.birth_year}</CardFooter>
        </Card>
     </Col>
    );
};
export default CharCard;