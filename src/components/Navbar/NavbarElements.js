import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"



export const Nav = styled.nav`
    background: #262626;
    height:  80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-weight: 700;
`;

// export const NavLogo = styled.img`
//     align-items: center;
//     width: 100px;
//     height: 70px;
//      background: transparent;
// `;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  color: #fff;
  /* background-color: #fff; */
`;

export const MenuList = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  padding: 18px;
  margin: 2px;
  cursor: pointer;
  /* border-top: 1px solid; */

  &:hover{
    border: 2px solid #FFA742;
    color: #FFA742;
  }
  &:active{
    background: #FFA742;
    color: #262626;
  }
`;