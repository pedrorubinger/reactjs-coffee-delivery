import { useState } from "react"
import { ShoppingCart, Minus, Plus } from "phosphor-react"

import {
  CoffeeListLabelCard,
  CoffeeListCardContainer,
  CoffeeListContainer,
  CoffeeListContent,
  CoffeeListTitle,
  CoffeeListCardLabelText,
  CoffeeListCardImage,
  CoffeeListCardTitle,
  CoffeeListCardFooter,
  CoffeeListCardDescription,
  CoffeeListCardsContainer,
  CoffeeListLabelCardsContainer,
  CoffeeListCardPrice,
  CoffeeCardPurchaseContainer,
  CoffeeCardPurchaseCart,
  CoffeeCardPurchaseAmountActions,
  CoffeeCardPurchaseControl,
  CoffeeCardPurchaseAmount,
} from "./styles"
import { Coffee, coffeeListData } from "../../../../data/CoffeeListData"
import { formatCurrency } from "../../../../utils"

export const CoffeeList = () => {
  const [list, setList] = useState<Coffee[]>(coffeeListData)

  const onChangeAmount = (operation: "-" | "+", id: string) => {
    const getAmount = (base: number): number => {
      if (base <= 0) return 1
      if (base >= 50) return 50

      return base
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
          {list.map((card) => (
            <CoffeeListCardContainer key={card.id}>
              <CoffeeListCardImage src={card.image} alt={card.title} />

              <CoffeeListLabelCardsContainer>
                {card.labels.map((label) => (
                  <CoffeeListLabelCard key={label}>
                    <CoffeeListCardLabelText>{label}</CoffeeListCardLabelText>
                  </CoffeeListLabelCard>
                ))}
              </CoffeeListLabelCardsContainer>

              <CoffeeListCardTitle>{card.title}</CoffeeListCardTitle>

              <CoffeeListCardDescription>
                {card.description}
              </CoffeeListCardDescription>

              <CoffeeListCardFooter>
                <CoffeeListCardPrice>
                  R$ <strong>{formatCurrency(card.price)}</strong>
                </CoffeeListCardPrice>

                <CoffeeCardPurchaseContainer>
                  <CoffeeCardPurchaseAmountActions>
                    <CoffeeCardPurchaseControl
                      type="button"
                      title={`Remover um café ${card.title}`}
                      onClick={() => onChangeAmount("-", card.id)}>
                      <Minus size={14} />
                    </CoffeeCardPurchaseControl>

                    <CoffeeCardPurchaseAmount>
                      {card.amount}
                    </CoffeeCardPurchaseAmount>

                    <CoffeeCardPurchaseControl
                      type="button"
                      title={`Adicionar mais um café ${card.title}`}
                      onClick={() => onChangeAmount("+", card.id)}>
                      <Plus size={14} />
                    </CoffeeCardPurchaseControl>
                  </CoffeeCardPurchaseAmountActions>

                  <CoffeeCardPurchaseCart
                    title={`Adicionar ${card.amount} ${
                      card.amount === 1 ? "unidade" : "unidades"
                    } de ${card.title} ao seu carrinho`}>
                    <ShoppingCart size={20} weight="fill" />
                  </CoffeeCardPurchaseCart>
                </CoffeeCardPurchaseContainer>
                {/*  */}
              </CoffeeListCardFooter>
            </CoffeeListCardContainer>
          ))}
        </CoffeeListCardsContainer>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
