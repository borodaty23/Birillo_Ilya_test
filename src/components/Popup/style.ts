import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const PopupContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  background-color: ${THEME.COLORS.CARPET_MOSS};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const PopupText = styled.p`
  color: white;
  font-size: ${THEME.FONT_SIZES.FONT_SIZE_20}px;
  line-height: ${THEME.FONT_SIZES.LINE_HEIGHT_23}px;
`;
