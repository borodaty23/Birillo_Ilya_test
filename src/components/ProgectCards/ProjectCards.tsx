import { Container } from "../Container";
import { UserCard } from "../UserCard/UserCard";
import { CustomSelect } from "../СustomSelect/CustomSelect";
import { Paginator } from "../Paginator/Paginator";
import { useAppSelector } from "../../hooks/hooks";
import { getCardsInfo } from "../../redux/selectors/getCardsSelector";
import { Box, ProjectCardsWrap, ProjectsBox } from "./style";

export const ProjectCards = () => {
  const { cards } = useAppSelector(getCardsInfo);

  return (
    <ProjectCardsWrap>
      <Container>
        <ProjectsBox>
          {cards.items &&
            cards.items.map((card, index) => {
              return <UserCard key={card.id} cardInfo={card}></UserCard>;
            })}
        </ProjectsBox>
        <Box>
          <CustomSelect />
          <Paginator />
        </Box>
      </Container>
    </ProjectCardsWrap>
  );
};
