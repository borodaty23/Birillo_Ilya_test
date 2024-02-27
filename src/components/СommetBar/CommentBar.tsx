import { useState } from "react";
import { CommentIcon } from "../icons";
import {
  CommentBarButton,
  CommentBarContainer,
  CommentBarInput,
} from "./styles";

export const CommentBar = () => {
  const [inputText, seInputText] = useState("");

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    seInputText(e.target.value);
  };

  return (
    <form onClick={(e: any) => e.stopPropagation()} onSubmit={handelSubmit}>
      <CommentBarContainer>
        <CommentBarInput
          placeholder="Комментарий к проекту"
          onChange={updateText}
        />
        <CommentBarButton>
          <CommentIcon />
        </CommentBarButton>
      </CommentBarContainer>
    </form>
  );
};
