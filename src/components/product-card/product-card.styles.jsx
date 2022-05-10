import styled from 'styled-components';
import { BaseButton } from '../button/button.styles';

export const Price = styled.span`
  width: 10%;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Footer = styled.div`
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductCardContainer = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  position: relative;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
  padding-top: 20px;
  margin: 20px 15px 0 15px;
  background-color: #FFF;

  img {
    width: 70%;
    height: auto;
    object-fit: cover;
    margin-bottom: 5px;
    opacity: 0.8;
  }

  ${BaseButton}{
    margin-top: 20px;
  }

  &:hover {
    img {
      opacity: 1;
    }

    ${BaseButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;