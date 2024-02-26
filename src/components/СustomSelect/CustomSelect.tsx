import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPerPage } from "../../redux/reducers/mainPageReducer";
import { getProjectCards } from "../../redux/actions/index ";
import { getCardsInfo } from "../../redux/selectors/getCardsSelector";
import { useNavigate } from "react-router-dom";
import { Box, DropDownHeader, DropDownList, DropDownText, ListItem } from "./styles";

export const CustomSelect = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchValue, page, perPage } = useAppSelector(getCardsInfo)
  
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const setDispatchedPerPage = (perPage: number) => {
    dispatch(setPerPage(perPage)) 
    dispatch(getProjectCards({searchValue, page, perPage }))
    navigate(`?query=${searchValue}&per_page=${perPage}&page=${page}`)
  }

  return (
    <Box>
        <DropDownHeader onClick={toggling}>
            <DropDownText>
                {perPage}
            </DropDownText>
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {/*Не успею сделать нормальную отрисовку!*/}
            <ListItem onClick={() => setDispatchedPerPage(10)}>10</ListItem>
            <ListItem onClick={() => setDispatchedPerPage(25)}>25</ListItem> 
            <ListItem onClick={() => setDispatchedPerPage(50)}>50</ListItem>
          </DropDownList>
        )}
    </Box>
  );
}