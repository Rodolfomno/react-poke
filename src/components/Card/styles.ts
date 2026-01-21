import styled from "styled-components";

export const Card = styled.div`
  border: solid 1px black;
  background: green;
  height: 285px;
  width: 203px;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const Name = styled.h3`
  text-transform: capitalize;
  color:#333;
`;

export const Types = styled.div`
  display: flex; 
  justify-content: center;
  gap: 8px;
`;

export const TypeBadge = styled.span`
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
`;