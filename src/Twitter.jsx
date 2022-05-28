import React from "react";
import styled from "styled-components";

const Twitter = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="twitter_image.png" alt="twitter" />
      </ImageContainer>
      <Title>Fetching twitter bookmarks </Title>
      <Loader className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url("twitter_bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div``;
const Loader = styled.div``;
const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #ffffff;
  margin: 20px 0;
`;
export default Twitter;
