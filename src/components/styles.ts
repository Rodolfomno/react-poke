import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 81px;
  font: inherit;
  cursor: pointer;
  background-color: white;

  /* 👇 quando a rota estiver ativa */
  &.active {
    background-color: #ededed;
  }

  &:hover {
    background-color: #ededed;
  }
`;

export const Buttons = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 185px;
`;

export const StyleHeader = styled.span`
  background-color: white;
  height: 99px;
  border: solid 1px #DFDFDF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px; 
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  height: 48px;

  background-color: #f2f4f7;
  border-radius: 999px;

  display: flex;
  align-items: center;

  padding: 0 16px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;

  font-size: 16px;
  font-family: inherit;
  color: #333;
  heigth: 56px;

  outline: none;

  &::placeholder {
    color: #8a8a8a;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const HomeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

export const ListItems = styled.div`

`;