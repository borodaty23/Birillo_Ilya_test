import { Header } from "../components/Header/Header"
import { ProjectCards } from "../components/ProgectCards/ProjectCards"
import { useAppSelector } from "../hooks/hooks"
import { getCardsInfo } from "../redux/selectors/getCardsSelector"

export const MainPage = () => {
    const { cards, isLoading } = useAppSelector(getCardsInfo)
        
    return (
        <>
            <Header/>
            {!isLoading ? <ProjectCards/> : <h2>Поиск проектов...</h2>}
        </>
    )
}