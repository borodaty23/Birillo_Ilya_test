import { ICard } from "../../types/ICard";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  deleteCard,
  editCard,
  setPopupActive,
} from "../../redux/reducers/mainPageReducer";
import {
  Button,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalInput,
  Overlay,
} from "./styles";
interface UserInfoModalProps {
  cardInfo: ICard;
  onClose: () => void;
}

export const UserInfoModal: React.FC<UserInfoModalProps> = ({
  cardInfo,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(true);
  const [inputName, setInputName] = useState(cardInfo.name);
  const [inputLogin, setInputLogin] = useState(cardInfo.owner.login);
  const [inputDescription, setInputDescription] = useState(
    cardInfo.description
  );

  const editButtonClick = () => {
    setIsEdit(!isEdit);
  };
  const deleteUserCard = () => {
    dispatch(deleteCard(cardInfo.id));
    onClose();
    dispatch(setPopupActive(true));
    setTimeout(() => {
      dispatch(setPopupActive(false));
    }, 2000);
  };
  const saveUserCard = () => {
    dispatch(editCard({ cardInfo, inputName, inputLogin, inputDescription }));
    onClose();
    dispatch(setPopupActive(true));
    setTimeout(() => {
      dispatch(setPopupActive(false));
    }, 2000);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Info</h2>
        </ModalHeader>
        <ModalContent>
          <p>Project name: {cardInfo.name}</p>
          {!isEdit && (
            <ModalInput
              onChange={(e) => setInputName(e.target.value)}
              value={inputName}
            />
          )}
          <p>Login: {cardInfo.owner.login}</p>
          {!isEdit && (
            <ModalInput
              onChange={(e) => setInputLogin(e.target.value)}
              value={inputLogin}
            />
          )}
          <p>Project description: {cardInfo.description}</p>
          {!isEdit && (
            <ModalInput
              onChange={(e) => setInputDescription(e.target.value)}
              value={inputDescription}
            />
          )}
        </ModalContent>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={deleteUserCard}>Delete</Button>
          <Button onClick={isEdit ? editButtonClick : saveUserCard}>
            {isEdit ? "Edit" : "Save"}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
};
