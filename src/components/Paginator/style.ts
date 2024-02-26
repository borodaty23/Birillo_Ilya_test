import styled from "styled-components";
import { THEME } from "../../constants/theme";


export const Box = styled.div`
    margin: auto;
`
export const RightArrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
`
export const LeftArrow = styled.div`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-225deg);
`

export const StyledButton = styled.button`
    height: 52px;
    width: 52px;
    margin: 0 ;
    padding: 5px 10px;
    border: 1px solid ${THEME.COLORS.CEREBRAL_GREY};
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: ${THEME.COLORS.SNOWFLAKE};
    }
    &:disabled {
        cursor: not-allowed;
    }
`;

export const StyledPageNumber = styled.button<{ active: boolean | string }>`
    height: 52px;
    width: 52px;
    margin: 0;
    padding: 5px 10px;
    border: 1px solid ${THEME.COLORS.CEREBRAL_GREY};
    border-radius: 3px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? THEME.COLORS.PROTOSS_PYLON : THEME.COLORS.WHITE)};
    color: ${(props) => (props.active ? THEME.COLORS.WHITE : THEME.COLORS.BLACK)};
    &:hover {
        background-color: ${(props) => (props.active ? THEME.COLORS.PROTOSS_PYLON : THEME.COLORS.SNOWFLAKE)};
    }
    &:disabled {
        cursor: not-allowed;
    }
    ${(props) =>
        props.active &&
        `
        &:not(:first-child) {
            border-left: 1px solid ${THEME.COLORS.CEREBRAL_GREY};
        }
        &:not(:last-child) {
            border-right: 1px solid ${THEME.COLORS.CEREBRAL_GREY};
        }
    `}
`;