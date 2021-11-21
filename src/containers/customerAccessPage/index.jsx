import React from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import { useParams } from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 1em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();

  return (
    <PageContainer backgroundColor = "#44adad">
      <Navbar />
      <StyledInnerContainer>
      <h1> Preregistration </h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSes_RkaSjIXEPfAO_xteEbpVNu-O1aXHhYqQpFwhnyDR9kvAw/viewform?embedded=true" width="640" height="1847" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>      </StyledInnerContainer>
    </PageContainer>
  );
}
