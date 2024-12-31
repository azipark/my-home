import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  z-index: 7721;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  padding: 0 20px;
  box-shadow: ${(props) => (props.isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none')};
  color: var(--white);
  background: ${(props) => (props.isScrolled ? '#212529' : 'transparent')};
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  margin: 0 auto;
`;

const NavLink = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  font-size: 10px;
  font-weight: 400;
  color: var(--white);

  + a {
    margin-left: 24px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrap isScrolled={isScrolled}>
      <Navbar>
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/projects">PROJECTS</NavLink>
        <NavLink href="/resume">RESUME</NavLink>
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;