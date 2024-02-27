import { PopupContainer, PopupText } from "./style";

interface IPopup {
  message: string;
}

export const Popup = ({ message }: IPopup) => {
  return (
    <PopupContainer>
      <PopupText>{message}</PopupText>
    </PopupContainer>
  );
};
