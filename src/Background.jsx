import React from "react";
import styled from "styled-components";
const Background = () => {
  return (
    <Container>
      <Oval></Oval>
      <Circle></Circle>
      <LargeRectangleLeft />
      <SmallRectangleLeft />
      <LargeRectangleRight />
      <SmallRectangleRight />
    </Container>
  );
};
const Container = styled.div`
  background: #16161e;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Oval = styled.div`
  width: 400px;
  height: 320px;
  border-radius: 50%;
  background: #730485;
  opacity: 0.5;
  filter: blur(100px);
  position: absolute;
  top: 30%;
  right: 20%;
`;
const Circle = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  /* background: #730485; */
  border: 2px solid #dfdfdf;
  opacity: 0.05;
  position: absolute;
  top: 30%;
  right: 20%;
`;
const LargeRectangleLeft = styled.div`
  position: absolute;
  width: 800px;
  height: 200px;
  bottom: -130px;
  left: -50px;
  background: #636363;
  opacity: 0.07;
  transform: rotate(15deg);
  ::after {
    content: "";
    position: absolute;
    width: 1000px;
    height: 100%;
    top: -170px;
    left: -190px;
    background: #16161e;
    border-radius: 100%;
    /* opacity: 0.07; */
    /* transform: rotate(-15deg); */
  }
`;
const SmallRectangleLeft = styled.div`
  position: absolute;
  width: 800px;
  height: 200px;
  bottom: -220px;
  left: -50px;
  background: #636363;
  opacity: 0.07;
  transform: rotate(15deg);
  ::after {
    content: "";
    position: absolute;
    width: 1000px;
    height: 100%;
    top: -170px;
    left: -190px;
    background: #16161e;
    border-radius: 100%;
    /* opacity: 0.07; */
    /* transform: rotate(-15deg); */
  }
`;
const LargeRectangleRight = styled.div`
  position: absolute;
  width: 800px;
  height: 200px;
  bottom: -280px;
  right: -160px;
  background: #636363;
  opacity: 0.07;
  transform: rotate(-40deg);
  ::after {
    content: "";
    position: absolute;
    width: 1000px;
    height: 100%;
    top: -170px;
    right: -190px;
    background: #16161e;
    border-radius: 100%;
    /* opacity: 0.07; */
    /* transform: rotate(-15deg); */
  }
`;
const SmallRectangleRight = styled.div`
  position: absolute;
  width: 800px;
  height: 200px;
  bottom: -370px;
  right: -150px;
  background: #636363;
  opacity: 0.07;
  transform: rotate(-40deg);
  ::after {
    content: "";
    position: absolute;
    width: 1000px;
    height: 100%;
    top: -170px;
    right: -190px;
    background: #16161e;
    border-radius: 100%;
    /* opacity: 0.07; */
    /* transform: rotate(-15deg); */
  }
`;
export default Background;
