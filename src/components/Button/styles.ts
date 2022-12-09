import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: #565656;
  border: none;
  border-radius: 22px;
  position: relative;
  margin: 2px;

  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  &:hover{
      opacity: 0.6;
      cursor: pointer;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
        min-width: 167px;
        height: 33px;
        border: 0;
        background: #E41050;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px; 

        }
    `}
`;
