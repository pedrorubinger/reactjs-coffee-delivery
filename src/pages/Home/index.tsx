import { Header } from "../../components/Header"
import { CoffeeList } from "./components/CoffeeList"
import { Intro } from "./components/Intro"
import { HomeContainer } from "./styles"

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
