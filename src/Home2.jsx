import React from "react";
import styled from "styled-components";
import Background from "./Background";

const Home2 = () => {
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
            Yayy! We hope you loved
            <br /> the surprise!!
          </Title>
          <Subtitle>What else you can do with it?</Subtitle>
          <BulletPoint>
            <BulletContainer>
              <img src="bullet.png" alt="bullet" />
            </BulletContainer>
            Pin this chrome extension
          </BulletPoint>
          <BulletPoint>
            <BulletContainer>
              <img src="bullet.png" alt="bullet" />
            </BulletContainer>
            Sync your Twitter to fetch Twitter bookmarks
          </BulletPoint>
          <BulletPoint>
            <BulletContainer>
              <img src="bullet.png" alt="bullet" />
            </BulletContainer>
            Sync your Twitter to fetch Twitter bookmarks
          </BulletPoint>
          <BulletPoint>
            <BulletContainer>
              <img src="bullet.png" alt="bullet" />
            </BulletContainer>
            Personalize bookmarks as per your choice
          </BulletPoint>
        </LeftContainer>
        <RightContainer>
          <img src="landing_image2.png" alt="landing_image2" />
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
    max-width: 474px;
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
const Subtitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #3ea580;
  margin: 20px 0;
`;
const BulletPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #d5d5d5;
  margin: 8px 0;
`;
const BulletContainer = styled.div`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 10px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
export default Home2;
