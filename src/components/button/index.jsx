import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: ${({ backgroundColor }) => (backgroundColor)};
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${({ hoverColor }) => (hoverColor)};
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size, backgroundColor, hoverColor } = props;

  return (
    <ButtonWrapper size={size} backgroundColor = {backgroundColor} hoverColor = {hoverColor} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
