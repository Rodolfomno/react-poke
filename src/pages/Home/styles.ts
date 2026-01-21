import styled from "styled-components";

export const HomeStyle = styled.main`
  width: 100%;
  min-height: calc(100vh - 99px);

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
`;

export const Filters = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto 16px;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;   /* 👈 centraliza */
  }
`;


export const Select = styled.select`
  height: 48px;
  width: 160px;

  padding: 0 16px;
  border-radius: 999px;
  border: none;

  background-color: #f2f4f7;
  color: #212e4c;

  font-size: 16px;
  font-family: inherit;

  outline: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px; /* 👈 mantém bonito */
  }
`;


export const ListItems = styled.section`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(203px, 1fr)
  );
  gap: 12px;
  justify-items: center;
`;
