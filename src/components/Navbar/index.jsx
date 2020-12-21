import React from "react";
import {
  Nav,
  Menu,
  MenuList,
  Address,
  Logo,

} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
            <h1 >Strawhat</h1>
            <p>Restuarants</p>
        </Logo>

        <Menu>
          <MenuList className="menu_items">
            <a>MENU</a>
          </MenuList>
          <MenuList>ABOUT</MenuList>
          <MenuList>RESERVATION</MenuList>
          <MenuList>ORDER</MenuList>
          <MenuList>NEWS</MenuList>
          <MenuList>CONTACT</MenuList>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
