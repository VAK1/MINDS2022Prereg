import React from "react";
import styled from "styled-components";
import {
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";



import { TopSection } from "./topSection";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
      </TopSection>
    </PageContainer>
  );
}
