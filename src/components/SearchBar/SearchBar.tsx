import { SearchIcon } from "../icons";
import { useEffect } from "react";
import { getProjectCards } from "../../redux/actions/index ";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCardsInfo } from "../../redux/selectors/getCardsSelector";
import {
  setPage,
  setPerPage,
  setSearchValue,
} from "../../redux/reducers/mainPageReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchBarButton, SearchBarContainer, SearchBarInput } from "./styles";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { page, perPage, searchValue } = useAppSelector(getCardsInfo);
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const getParamsFromUrl = (
    url: string
  ): {
    query: string | null;
    per_page: number | null;
    page_param: number | null;
  } => {
    const params = new URLSearchParams(url);
    const query = params.get("query");
    const per_page = Number(params.get("per_page"));
    const page_param = Number(params.get("page"));

    return {
      query,
      per_page,
      page_param,
    };
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchValue &&
      navigate(`?query=${searchValue}&per_page=${perPage}&page=${page}`);
  };
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };
  const handleButtonClick = () => {
    dispatch(getProjectCards({ page, perPage, searchValue: searchValue }));
  };

  const getRequestFromState = () => {
    navigate(`?query=${searchValue}&per_page=${perPage}&page=${page}`);
    dispatch(getProjectCards({ page, perPage, searchValue: searchValue }));
  };

  const getRequestFromUrl = (
    subject: string | null,
    per_page: number | null,
    page_param: number | null
  ) => {
    navigate(`?query=${subject}&per_page=${per_page}&page=${page_param}`);
    dispatch(
      getProjectCards({
        page: page_param,
        perPage: per_page,
        searchValue: subject,
      })
    );
  };

  useEffect(() => {
    const { query, per_page, page_param } = getParamsFromUrl(search);
    !search
      ? getRequestFromState()
      : getRequestFromUrl(query, per_page, page_param);
    search && dispatch(setPage(page_param));
    search && dispatch(setPerPage(per_page));
  }, []);

  return (
    <form onSubmit={handelSubmit}>
      <SearchBarContainer>
        <SearchBarInput
          placeholder="Начните вводить текст для поиска (не менее трех символов)"
          onChange={updateText}
        />
        <SearchBarButton onClick={handleButtonClick}>
          <SearchIcon />
        </SearchBarButton>
      </SearchBarContainer>
    </form>
  );
};
