import styled from "styled-components";

export const Pages = styled.div`
  display: flex;
  gap: 8px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  all: unset;
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ active }) =>
    active ? "#1f1f1f" : "transparent"};

  color: ${({ active }) => (active ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ active }) =>
      active ? "#1f1f1f" : "#ededed"};
  }
`;


export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin: 40px 0;
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ disabled }) => (disabled ? "#b0b0b0" : "#000")};

  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;
