import styled from 'styled-components';

import { BaseButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: ${props => props.theme.color.bgColor};
  top: 90px;
  right: 40px;
  z-index: 5;
  
  ${BaseButton}{
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: ${props => props.theme.color.text}
`;