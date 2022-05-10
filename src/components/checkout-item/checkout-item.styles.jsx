import styled from 'styled-components';

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
  `;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

export const Price = styled.span`
`;

export const Quantity = styled.span`
  display: flex;
`;

export const Name = styled.span`
`;

export const ImageContainer = styled.div`
  padding-right: 15px;

  img {
    width: 80%;
    height: auto;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  align-items: center;
  background-color: ${props => props.theme.color.cardBg};
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

  ${Name},
  ${Quantity},
  ${Price}{
    justify-content: center;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
  