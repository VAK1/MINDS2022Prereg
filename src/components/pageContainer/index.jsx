import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  background-color: ${({ backgroundColor }) => (backgroundColor)};
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

export function PageContainer(props) {
  const { backgroundColor } = props;

  return <PageWrapper backgroundColor = {backgroundColor}>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  min-height: 70vh;
  //padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
