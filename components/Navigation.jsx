"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

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
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3;
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  console.log("currentPath:", pathname);

  const [isActivePath, setIsActivePath] = useState(null);

  function isActive(path) {
    if (pathname === path) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Footer>
      <Nav>
        <NavLink href="/art-pieces" $isActive={isActive("/art-pieces")}>
          Gallery
        </NavLink>
        <NavLink href="/" $isActive={isActive("/")}>
          Spotlight
        </NavLink>
        <NavLink href="/favorites" $isActive={isActive("/favorites")}>
          Favorites
        </NavLink>
      </Nav>
    </Footer>
  );
}
