import styled from 'styled-components';

export const Price = styled.span`
  font-size: 13px;
`;

export const Name = styled.span`
  font-size: 15px;
  font-weight:bold;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-size: 13px;
  color: ${props => props.theme.color.defaultTextColor};
  `;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background-color: ${props => props.theme.color.cardBg};
  padding-top: 7px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

  img {
    width: 65px;
    height: 65px;
  }
`;
  