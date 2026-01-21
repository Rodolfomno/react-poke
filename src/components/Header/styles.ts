import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Button = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 16px;

  font: inherit;
  cursor: pointer;
  background-color: white;

  &.active {
    background-color: #f5f5f5;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyleHeader = styled.header`
  width: 100%;
  height: 99px;

  background-color: white;
  border-bottom: 1px solid #dfdfdf;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  position: relative;
`;

export const MenuToggle = styled.button`
  all: unset;
  cursor: pointer;

  font-size: 24px;
  line-height: 1;

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const MobileMenu = styled.div`
  position: absolute;
  top: 99px;
  right: 0;

  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dfdfdf;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;

  @media (min-width: 769px) {
    display: none;
  }
`;
