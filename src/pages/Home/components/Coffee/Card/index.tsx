import { ShoppingCart, Minus, Plus } from "phosphor-react"

import { Coffee } from "../../../../../data/CoffeeListData"
import { formatCurrency } from "../../../../../utils"
import {
  CoffeeLabelCard,
  CoffeeCardContainer,
  CoffeeCardLabelText,
  CoffeeCardImage,
  CoffeeCardTitle,
  CoffeeCardFooter,
  CoffeeLabelCardsContainer,
  CoffeeCardPrice,
  CoffeeCardPurchaseContainer,
  CoffeeCardPurchaseCart,
  CoffeeCardPurchaseAmountActions,
  CoffeeCardPurchaseControl,
  CoffeeCardPurchaseAmount,
  CoffeeCardDescription,
} from "./styles"

interface CoffeeCardProps {
  coffee: Coffee
  onChangeAmount: (operation: "-" | "+", id: string) => void
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  coffee,
  onChangeAmount,
}) => {
  const formattedPrice = formatCurrency(coffee.price)
  const priceFontSize =
    formattedPrice?.length >= 8 ? 1.5 - formattedPrice?.length / 30 : 1.5

  return (
    <CoffeeCardContainer>
      <CoffeeCardImage src={coffee.image} alt={coffee.title} />

      <CoffeeLabelCardsContainer>
        {coffee.labels.map((label) => (
          <CoffeeLabelCard key={label}>
            <CoffeeCardLabelText>{label}</CoffeeCardLabelText>
          </CoffeeLabelCard>
        ))}
      </CoffeeLabelCardsContainer>

      <CoffeeCardTitle>{coffee.title}</CoffeeCardTitle>

      <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>

      <CoffeeCardFooter>
        <CoffeeCardPrice fs={priceFontSize}>
          R$ <strong>{formattedPrice}</strong>
        </CoffeeCardPrice>

        <CoffeeCardPurchaseContainer>
          <CoffeeCardPurchaseAmountActions>
            <CoffeeCardPurchaseControl
              type="button"
              title={`Remover uma unidade de ${coffee.title}`}
              onClick={() => onChangeAmount("-", coffee.id)}>
              <Minus size={14} />
            </CoffeeCardPurchaseControl>

            <CoffeeCardPurchaseAmount>{coffee.amount}</CoffeeCardPurchaseAmount>

            <CoffeeCardPurchaseControl
              type="button"
              title={`Adicionar mais um café ${coffee.title}`}
              onClick={() => onChangeAmount("+", coffee.id)}>
              <Plus size={14} />
            </CoffeeCardPurchaseControl>
          </CoffeeCardPurchaseAmountActions>

          <CoffeeCardPurchaseCart
            title={`Adicionar ${coffee.amount} ${
              coffee.amount === 1 ? "unidade" : "unidades"
            } de ${coffee.title} ao seu carrinho`}>
            <ShoppingCart size={20} weight="fill" />
          </CoffeeCardPurchaseCart>
        </CoffeeCardPurchaseContainer>
        {/*  */}
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
