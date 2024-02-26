import styled from "styled-components"
import { THEME } from "../../constants/theme"

export const SearchBarContainer = styled.div`
    display: flex;
`

export const SearchBarInput = styled.input`
    border: 1px solid rgb(162, 163, 164);
    width: 100%;
    font-size: 14px;
    line-height: 16px;
    padding: 14px 23px;
    &::placeholder {
        color: ${THEME.COLORS.BLACK};
    }
`

export const SearchBarButton = styled.button.attrs({
    type: "submit"
})`
    border: 1px solid rgb(162, 163, 164);
    background-color: ${THEME.COLORS.PROTOSS_PYLON};
    padding: 12px 13px;
    cursor: pointer
`