import {GetStaticPaths, GetStaticProps } from 'next';
import { Flex } from "@chakra-ui/react";
import { Content } from "../../components/Continent/Content";
import { ContinentBanner } from "../../components/Continent/ContinentBanner";
import { Cities } from "../../components/Continent/Cities";
import { Header } from '../../components/Header'
import api from '../../services/api';
import { useState, useEffect } from 'react';


interface ContinentProps {
  cities: {
    cityImage: string,
    cityName: string,
    countryName: string,
    flagCountryImage: string,
  }[]
}

export default function Continent() {
  const [cities, setCities] = useState([]);

  async function getCities (){
    const response = await api.get('/europa');
    setCities(response.data)
  } 

  useEffect( () =>{
    getCities()
  },[]);

  return (
    <Flex direction="column">
      <Header/>
      <ContinentBanner/>

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem" >
        <Content />
        <Cities cities={cities}/>
      </Flex>
    </Flex>

  );
}

