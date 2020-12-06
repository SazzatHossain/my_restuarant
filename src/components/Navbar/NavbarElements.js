import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #292726;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-wrap: nowrap;
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  color: #fff;
  font-family: Georgia, "Times New Roman", Times, serif;
  /* background-color: #fff; */
`;

export const MenuList = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 16px;
  margin: 2px;
  cursor: pointer;
  /* border-top: 1px solid; */

  &:hover {
    border: 2px solid #ffa742;
    color: #ffa742;
  }
  &:active {
    background: #ffa742;
    color: #262626;
  }
`;
