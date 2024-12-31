import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const HomeWrap = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  color: var(--white);
  background-color: var(--primary);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .main-text {
    overflow: clip;
    position: relative;
    font-size: 12vw;
    font-weight: 900;
    color: var(--white);
    background-clip: text;
    background-color: var(--white);

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 40%;
      top: 18%;
      left: 50%;
      aspect-ratio: 1;
      translate: -50% 0;
      border-top-left-radius: 60% 80%;
      border-top-right-radius: 50% 80%;
      border-bottom-left-radius: 60% 80%;
      border-bottom-right-radius: 50% 80%;
      animation: rot 10s linear infinite;
      mix-blend-mode: screen;
      background-color: var(--green);
    }

    &:after {
      animation-delay: -4s;
      animation-duration: 8s;
    }
  }

  @keyframes rot {
    to { rotate: 360deg; }
  }
`;

function Home() {
  return (
    <>
      <HomeWrap>
        <div>
          <h1 className="main-text">hello</h1>
        </div>
      </HomeWrap>
      <Footer />
    </>
  );
}

export default Home;