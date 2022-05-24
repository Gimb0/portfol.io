import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <Wrapper>
    <Title pageTitle="404"/>
    <h2>Resource Not Found</h2>
  </Wrapper>
)