import styled from 'styled-components';
import { BaseButton } from '../../components/button/button.styles';

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  color: ${props => props.theme.color.text}
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;

  span{
    color: ${props => props.theme.color.text}
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  margin-bottom: 10px;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  padding: 30px;
  justify-content: center;

  ${BaseButton}{
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;
