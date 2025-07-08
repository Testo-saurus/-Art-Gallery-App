"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4.375rem;
  background-color: #f0f0f0;
  display: flex;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top: 1px solid #dcdcdc;
`;

const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  font-weight: 600;
  font-size: 1.5rem;
  color: ${(props) => (props.$isActive ? "rgb(40, 103, 201)" : "#888")};
  background-color: ${(props) => (props.$isActive ? "#c4d9ff" : "transparent")};
  transition: background-color 0.3s ease, color 0.3s ease;
  border-left: 1px solid #e0e0e0;

  &:first-child {
    border-left: none;
  }

  &:hover {
    background-color: #a6c8ff;
    color: #1a4f99;
  }
`;

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <Footer>
      <NavLink href="/art-pieces" $isActive={isActive("/art-pieces")}>
        Gallery
      </NavLink>
      <NavLink href="/" $isActive={isActive("/")}>
        Spotlight
      </NavLink>
      <NavLink href="/favorites" $isActive={isActive("/favorites")}>
        Favorites
      </NavLink>
    </Footer>
  );
}
