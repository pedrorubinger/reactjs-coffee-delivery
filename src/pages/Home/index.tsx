import { useContext } from "react"
import { Header } from "../../components/Header"
import { CartContext } from "../../contexts/CartContext"
import { CoffeeList } from "./components/Coffee/List"
import { Intro } from "./components/Intro"
import { HomeContainer } from "./styles"

export const Home: React.FC = () => {
  const { cart } = useContext(CartContext)

  console.log("cart:", JSON.stringify(cart, null, 2))

  return (
    <HomeContainer>
      <Header />
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
