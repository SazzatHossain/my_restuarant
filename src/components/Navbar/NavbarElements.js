import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Address = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #252525;
  height: 40px;
`;

export const Nav = styled.nav`
  background: #3e3e3e;
  min-height: 80px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  font-family: Sunshine;
  font-size: 1.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  flex-wrap: wrap;
  user-select: none;

  h1 {
    color: #ffa742;
  }
  p {
    font-size: ".8em";
    color: #fff;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: auto;
  padding: 0px;
  color: #fff;
  font-family: Georgia, "Times New Roman", Times, serif;
  /* background-color: #fff; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuList = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding: 16px;
  user-select: none;
  /* margin: 2px; */
  cursor: pointer;
  /* border-top: 1px solid; */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    border: 1px solid #ffa742;
    color: #ffa742;
  }
  &:active {
    background: #ffa742;
    color: #262626;
  }
`;
