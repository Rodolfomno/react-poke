import { NavLink } from "react-router-dom";
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

  &.active {
    background-color: #ededed;
  }

  &:hover {
    background-color: #ededed;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyleHeader = styled.header`
  width: 100%;

  background-color: white;
  height: 99px;
  border-bottom: 1px solid #dfdfdf;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
`;