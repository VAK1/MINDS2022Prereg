import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { Link } from "react-router-dom";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/Artificial intelligence_Two Color.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
  text-align: left;
  width: 50vw;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    text-align: center;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
        <Marginer direction="horizontal" margin={30} />
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <SloganText>Machine Intelligence and Data Science in the toolbox of every high schooler.</SloganText>
            <Marginer direction="vertical" margin={15} />
            <ButtonsContainer>
              <Link to="/customer/access/signup">
                <Button backgroundColor = "#2a9d8f" hoverColor = "#4abdaf">Preregistration open now!</Button>
              </Link>
              <Marginer direction="horizontal" margin={15} />
              <Link to="/competition_structure">
                <Button backgroundColor = "#2a4466" hoverColor = "#4a6486">Competition overview</Button>
              </Link>
            </ButtonsContainer>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="best in the field" />
            </StandoutImage>
          )}
          <Marginer direction="horizontal" margin={30} />
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
