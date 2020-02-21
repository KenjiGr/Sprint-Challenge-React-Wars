import React, { useState, useEffect } from "react";
import {Container, Row} from 'reactstrap';
import axios from "axios";
import CharCard from './Card';

export default function Characters() {
const [data, setData] = useState([]);

useEffect(() =>{
  axios.get("https://swapi.co/api/people/")
  .then(response =>{
    console.log(response.data.results);
    setData(response.data.results);
  })
  .catch(error =>{
    console.log("The data not returned", error);
  } )
},[]);

return (
    <Container>
        <Row>
            {data.map(data => {
                return <CharCard data={data} key={data}/>;
            })}
        </Row>
    </Container>
)
};