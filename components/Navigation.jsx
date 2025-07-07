'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
`;

const NavLink = styled(Link)`
  color: #555;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }
`;

export default function Navigation() {
  return (
    <Footer>
      <Nav>
        <NavLink href="/art-pieces">Gallery</NavLink>
        <NavLink href="/spotlight">Spotlight</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
      </Nav>
    </Footer>
  );
}
