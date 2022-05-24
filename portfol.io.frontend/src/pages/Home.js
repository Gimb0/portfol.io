import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import logo from './../img/Portfol.io.png';
 //C:\Users\Matthew\git\matthew\portfol.io\portfol.io.frontend\src\img\Portfol.io.png
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

export const Home = (props) => (
  <GridWrapper>
    <Title pageTitle="Home"/>
    <img className="logo" src={logo} />
    <h1 className='h1'>A clean and simple share portfolio tracker.</h1>
    <h3 className='h3'>Created by Brad S, Marshall Z, Stephanie P and Matthew Y</h3>
  </GridWrapper>
)