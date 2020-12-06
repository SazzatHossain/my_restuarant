 import React from 'react';
 import {Nav, NavLink, Menu, MenuList, SubMenu, SubMenuList} from "./NavbarElements";
 
 
 const Navbar = () => {
   return (
     <>
       <Nav>
          <NavLink to="/" style={{fontSize: "29px", fontFamily: "Sunshine"}}><h1 style= {{color: "#FFA742"}}>SH</h1> <p style= {{fontSize: ".8em"}}>Restuarants</p> </NavLink>
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
 