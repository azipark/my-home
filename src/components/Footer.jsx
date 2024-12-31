import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 60px;
  font-size: 12px;
  font-weight: 400;
  color: var(--white);
  background-color: var(--primary);

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Home() {
  return (
    <>
      <FooterWrap>
        <div className="inner">
          &#169; 2024 HY KELLY
        </div>
      </FooterWrap>
    </>
  );
}

export default Home;