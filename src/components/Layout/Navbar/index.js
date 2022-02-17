import React from "react";
import {
  NavArea,
  NavUpside,
  NavGroupButton,
  ButtonLogin,
  ButtonRegister,
  ButtonCart,
  NavMenu,
  UpsideArea,
  MenuOption,
  MenuList,
  NavLink
} from "./style";

import Search from "../../Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  return (
    <NavArea>
      <UpsideArea>
        <NavUpside>
          <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
            <h1>LOGO</h1>
          </NavLink>
          <Search></Search>
          <NavGroupButton>
            <NavLink to="/login">
              <ButtonLogin type="button" value="Entrar"></ButtonLogin>
            </NavLink>
            <NavLink to="/register">
              <ButtonRegister type="button" value="Registrar"></ButtonRegister>
            </NavLink>
            
            <ButtonCart>
              <ShoppingCartIcon
                sx={{ fontSize: 30, color: "#fff" }}
              ></ShoppingCartIcon>
            </ButtonCart>
          </NavGroupButton>
        </NavUpside>
      </UpsideArea>

      <NavMenu>
        <MenuList>
          <MenuOption>
            <MenuIcon sx={{ marginRight: "4px" }}></MenuIcon>
            Todos os Departamentos
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "4px" }}
            ></KeyboardArrowDownIcon>
          </MenuOption>
          <MenuOption>Ofertas</MenuOption>
          <MenuOption>Populares</MenuOption>
        </MenuList>
      </NavMenu>
    </NavArea>
  );
};

export default Navbar;
