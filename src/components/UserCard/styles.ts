import styled from "styled-components"
import { THEME } from "../../constants/theme"

export const CardWrapper = styled.article`
    width: calc((100% - 60px) / 3);
    min-width: 260px;
    padding: 13px 15px;
    margin-bottom: 23px;
    border: 1px solid ${THEME.COLORS.DARK_SOULS};
    box-shadow: 0px 4px 4px 0px ${THEME.COLORS.BLACK_25};
    cursor: pointer;
`
export const CardIconBox = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 26px;
`
export const CardAuthorNumbers = styled.p`
    margin-left: 18px;
    margin-right: 45px;
    font-size: ${THEME.FONT_SIZES.FONT_SIZE_16}px;
    line-height: ${THEME.FONT_SIZES.LINE_HEIGHT_19}px;
`
export const Box = styled.div<{ margin?: string }>`
    display: flex;
    align-items: center;
    margin-bottom: ${p => p ? p.margin : 0};
`
export const Avatar = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`
export const Link = styled.a`
    font-size: ${THEME.FONT_SIZES.FONT_SIZE_20}px;
    line-height: ${THEME.FONT_SIZES.LINE_HEIGHT_23}px;
    margin-bottom: 18px;
    text-decoration: none;
    color: ${THEME.COLORS.BLACK};
    display: block
`