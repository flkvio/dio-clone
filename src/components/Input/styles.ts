import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const IconContainer = styled.div`
  margin-right: 10px;
`;
export const InputText = styled.input`
  width: 100%;
  background-color: transparent;
  color: #ffffff;
  border: 0;
  height: 30px;
`;
export const ErrorText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  color: #ff0000;
  font-size: 12px;
  margin: 5px 0;
`;
