import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCardsInfo } from "../../redux/selectors/getCardsSelector";
import { setPage } from "../../redux/reducers/mainPageReducer";
import { getProjectCards } from "../../redux/actions/index ";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  LeftArrow,
  RightArrow,
  StyledButton,
  StyledPageNumber,
} from "./style";

export const Paginator = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cards, perPage, page, searchValue } = useAppSelector(getCardsInfo);

  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(cards.total_count / perPage)
  );
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const displayedPageNumbers = pageNumbers.slice(page - 1, page + 2);

  const handlePagesChange = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(
      getProjectCards({ page: newPage, perPage, searchValue: searchValue })
    );
    navigate(`?query=${searchValue}&per_page=${perPage}&page=${newPage}`);
  };

  const handleCurPageChange = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(
      getProjectCards({ page: newPage, perPage, searchValue: searchValue })
    );
    navigate(`?query=${searchValue}&per_page=${perPage}&page=${newPage}`);
  };

  return (
    <Box>
      <StyledButton
        onClick={() => handlePagesChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <LeftArrow />
      </StyledButton>
      {displayedPageNumbers.map((number) => (
        <StyledPageNumber
          key={number}
          active={number === page}
          onClick={() => handleCurPageChange(number)}
        >
          {number}
        </StyledPageNumber>
      ))}
      <StyledButton
        onClick={() => handlePagesChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <RightArrow />
      </StyledButton>
    </Box>
  );
};
