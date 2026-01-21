import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ListItems = styled.div`
  width: 100%;
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`;
