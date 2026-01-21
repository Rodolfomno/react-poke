import styled from "styled-components";

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
  height: 56px;

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
