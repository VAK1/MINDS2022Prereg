import React from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";


import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 1em;
`;



export function EventsOverviewPage(props) {
  const { action } = useParams();

  return (
    <PageContainer backgroundColor = "#44ff88">
      <Navbar />
      <StyledInnerContainer>
        <h1> Competition Overview </h1>
        <h4> Start date: February 1st, 2022 </h4>
        <span>
          <h2> Event blocs </h2>
          <h5>Computer Vision</h5>
          <h5>Natural Language Processing</h5>
          <h5>Machine Learning</h5>
          <h5>Reinforcement Learning</h5>
        </span>
        <span>
          <h2>Competition Structure</h2>
          <h5>Secure Multiple Choice Test - Machine Learning Fundamentals</h5>
          <h5>Programming assessment - Programming Fundamentals</h5>
          <h5>Scenario-based model training - Application-based Fundamentals</h5>
        </span>


      </StyledInnerContainer>
    </PageContainer>
  );
}
