import styled from "styled-components";

export const Card = styled.div`
  background-color: #F0F3FF;
  height: 285px;
  width: 203px;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
`;

export const Name = styled.h3`
  text-transform: capitalize;
  color: #212E4C;
  font-size: 14px;
`;

export const Types = styled.div`
  display: flex; 
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TypeBadge = styled.span`
  color: #11B047;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 13px;
`;

export const IdStyle = styled.span`
  color: #263156;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 13px;
`;