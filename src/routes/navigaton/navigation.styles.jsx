import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div `
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #02040E;
  color: #FFF;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px 50px;
`;

export const NavLinks = styled.div `
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 50px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #FFF;
  font-weight: bold;
`;

export const ThemeButton = styled.span`
  font-weight: bold;
  cursor: pointer;
`;
