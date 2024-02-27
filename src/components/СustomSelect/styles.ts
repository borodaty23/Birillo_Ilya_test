import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const DropDownHeader = styled.div`
  box-shadow: 0 2px 3px ${THEME.COLORS.BLACK_25};
  width: 71px;
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
  cursor: pointer;

  &::after {
    border: medium solid transparent;
    content: "";
    top: 40%;
    left: 50%;
    position: absolute;
    height: 0;
    width: 0;
    border-color: ${THEME.COLORS.GRAY} rgba(255, 212, 52, 0)
      rgba(255, 212, 52, 0);
    border-width: 20px 10px 10px;
  }
`;

export const DropDownText = styled.p``;

export const DropDownList = styled("ul")`
  position: absolute;
  width: 71px;
  padding: 0;
  margin: 0;
  border: 1px solid ${THEME.COLORS.DARK_SOULS};
  border-bottom: 0;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  display: flex;
  align-items: center;
  list-style: none;
  height: 44px;
  width: 100%;
  border: 1px solid ${THEME.COLORS.DARK_SOULS};
  padding: 0 10px;
  cursor: pointer;
`;

export const Box = styled.div``;
