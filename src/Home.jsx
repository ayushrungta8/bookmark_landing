import React from "react";
import styled from "styled-components";
import Background from "./Background";

const Home = () => {
  return (
    <Container>
      <BgContainer>
        <Background />
      </BgContainer>
      <ContentContainer>
        <LeftContainer>
          <LogoContainer>
            <img src="logo.png" alt="logo" />
          </LogoContainer>

          <Title>
            Time to try your <br />
            Bookmark of the day!
          </Title>
          <Button>I'M READY!</Button>
        </LeftContainer>
        <RightContainer>
          <img src="landing_image.png" alt="landing_image" />
        </RightContainer>
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;
const BgContainer = styled.div`
  position: relative;
`;
const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  object-fit: contain;
  img {
    width: 100%;
  }
  /* border: 1px solid red; */
`;
const RightContainer = styled.div`
  /* border: 1px solid red; */
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  img {
    width: 100%;
  }
`;
const LogoContainer = styled.div`
  width: 72px;
  height: 72px;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #ffffff;
  margin: 20px 0;
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 175px;
  height: 50px;
  border: none;
  color: #fff;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #864ece;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;
export default Home;
