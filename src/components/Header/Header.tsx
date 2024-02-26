import { Container } from "../Container"
import { SearchBar } from "../SearchBar/SearchBar"
import { Wrapper } from "./style"

export const Header = () => {
    return (
        <Wrapper>
            <Container>
                <SearchBar></SearchBar>
            </Container>
        </Wrapper>
    )
}