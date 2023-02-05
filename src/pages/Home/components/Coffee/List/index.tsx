import { useState } from "react"

import { coffeeListData } from "../../../../../data/CoffeeListData"
import { Coffee } from "../../../../../interfaces"
import {
  CoffeeListContainer,
  CoffeeListContent,
  CoffeeListTitle,
  CoffeeListCardsContainer,
} from "./styles"
import { CoffeeCard } from "../Card"

export const CoffeeList = () => {
  const [list, setList] = useState<Coffee[]>(coffeeListData)

  const onChangeAmount = (operation: "-" | "+", id: string) => {
    const getAmount = (amount: number): number => {
      if (amount <= 0) return 1
      if (amount >= 50) return 50

      return amount
    }

    setList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let itemAmount = item.amount
          const amount = operation === "+" ? ++itemAmount : --itemAmount ?? 1

          return { ...item, amount: getAmount(amount) }
        }

        return { ...item }
      })
    )
  }

  return (
    <CoffeeListContainer>
      <CoffeeListContent>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeListCardsContainer>
          {list.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onChangeAmount={onChangeAmount}
            />
          ))}
        </CoffeeListCardsContainer>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
