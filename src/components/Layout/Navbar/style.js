import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavArea = styled.div`
  width: 100%;
  background-color: #ff8c00;
`;

export const NavUpside = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  padding: 6px 0px;
  align-items: center;
  flex: 1 1 0%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const NavLogo = styled.img``;

export const NavGroupButton = styled.div`
  display: flex;

  
`;
export const UpsideArea = styled.div`
  width: 100%;
  
`;
export const ButtonLogin = styled.input`
   width:auto;
  padding: 0px 6px;
  height:42px;
  border: none;
  background-color: #ffa500;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  
  
  
`;
export const NavLink = styled(Link)`
      text-decoration: none;
      
`
export const ButtonRegister = styled.input`
  border: none;
  background-color: #ffa500;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: 2px;
  width:auto;
  padding: 0px 6px;
  height:42px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  
`;
export const ButtonCart = styled.button`
  border-radius: 6px;
  border: none;
  width:42px;
  height:42px;
  background-color: #ffa500;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  &:before {
    content: "1";
    width: 16px;
    height: 16px;
    background-color: #fff;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 50%;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  background-color: #ff7a00;
  padding: 10px;
  
`;

export const MenuList = styled.ul`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;


  color: #fff;
`;

export const MenuOption = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  
`;

