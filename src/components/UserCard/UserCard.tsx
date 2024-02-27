import { CommentBar } from "../СommetBar/CommentBar";
import { StarIcon } from "../icons/StarIcon";
import { ViewsIcon } from "../icons";
import { ICard } from "../../types/ICard";
import { useState } from "react";
import { UserInfoModal } from "../UserModal/UserModal";
import { Popup } from "../Popup/PopUp";
import {
  Avatar,
  Box,
  CardAuthorNumbers,
  CardIconBox,
  CardWrapper,
  Link,
} from "./styles";
import { getCardsInfo } from "../../redux/selectors/getCardsSelector";
import { useAppSelector } from "../../hooks/hooks";

export interface ICardInfo {
  cardInfo: ICard;
}

export const UserCard = ({ cardInfo }: ICardInfo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isPopupActive } = useAppSelector(getCardsInfo);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <CardWrapper onClick={openModal}>
        <Link
          onClick={(e) => e.stopPropagation()}
          href={cardInfo.html_url}
          target="_blank"
        >
          {cardInfo.name}
        </Link>
        <Box margin="13px">
          <CardIconBox>
            <Avatar src={cardInfo.owner.avatar_url} alt="avatar" />
          </CardIconBox>
          <Link
            onClick={(e) => e.stopPropagation()}
            href={cardInfo.owner.html_url}
            target="_blank"
          >
            {cardInfo.owner.login}
          </Link>
        </Box>
        <Box margin="15px">
          <Box>
            <StarIcon></StarIcon>
            <CardAuthorNumbers>{cardInfo.stargazers_count}</CardAuthorNumbers>
          </Box>
          <Box>
            <ViewsIcon></ViewsIcon>
            <CardAuthorNumbers>{cardInfo.watchers_count}</CardAuthorNumbers>
          </Box>
        </Box>
        <CommentBar />
      </CardWrapper>
      {isModalOpen && (
        <UserInfoModal cardInfo={cardInfo} onClose={closeModal} />
      )}
      {isPopupActive && <Popup message="SUCCESSFULLY" />}
    </>
  );
};
