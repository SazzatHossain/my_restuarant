 import React from 'react';
 import {Nav, NavLink, Menu, MenuList} from "./NavbarElements";
 
 
 const Navbar = () => {
   return (
     <>
       <Nav>
          <NavLink to="/"><h1 style= {{color: "#FFA742"}}>SH</h1> <p style= {{fontSize: ".8em"}}>Restuarants</p> </NavLink>
          <Menu>
              <MenuList>MENU</MenuList>
              <MenuList>ABOUT</MenuList>
              <MenuList>RESERVATION</MenuList>
              <MenuList>NEWS</MenuList>
              <MenuList>CONTACT</MenuList>
          </Menu>
       </Nav>
     </>
   );
 };
 
 export default Navbar;
 