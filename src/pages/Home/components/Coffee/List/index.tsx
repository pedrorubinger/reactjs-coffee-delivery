import { useContext } from "react"

import { CartContext } from "../../../../../contexts/CartContext"
import { CoffeeCard } from "../Card"
import {
  CoffeeListContainer,
  CoffeeListContent,
  CoffeeListTitle,
  CoffeeListCardsContainer,
} from "./styles"

export const CoffeeList = () => {
  const { coffeeList } = useContext(CartContext)

  return (
    <CoffeeListContainer>
      <CoffeeListContent>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeListCardsContainer>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListCardsContainer>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
