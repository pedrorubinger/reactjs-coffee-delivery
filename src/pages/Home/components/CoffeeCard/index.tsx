import { ShoppingCart, Minus, Plus } from "phosphor-react"

import { Coffee } from "../../../../data/CoffeeListData"
import { formatCurrency } from "../../../../utils"
import {
  CoffeeListLabelCard,
  CoffeeListCardContainer,
  CoffeeListCardLabelText,
  CoffeeListCardImage,
  CoffeeListCardTitle,
  CoffeeListCardFooter,
  CoffeeListLabelCardsContainer,
  CoffeeListCardPrice,
  CoffeeCardPurchaseContainer,
  CoffeeCardPurchaseCart,
  CoffeeCardPurchaseAmountActions,
  CoffeeCardPurchaseControl,
  CoffeeCardPurchaseAmount,
  CoffeeListCardDescription,
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
    <CoffeeListCardContainer key={coffee.id}>
      <CoffeeListCardImage src={coffee.image} alt={coffee.title} />

      <CoffeeListLabelCardsContainer>
        {coffee.labels.map((label) => (
          <CoffeeListLabelCard key={label}>
            <CoffeeListCardLabelText>{label}</CoffeeListCardLabelText>
          </CoffeeListLabelCard>
        ))}
      </CoffeeListLabelCardsContainer>

      <CoffeeListCardTitle>{coffee.title}</CoffeeListCardTitle>

      <CoffeeListCardDescription>
        {coffee.description}
      </CoffeeListCardDescription>

      <CoffeeListCardFooter>
        <CoffeeListCardPrice fs={priceFontSize}>
          R$ <strong>{formattedPrice}</strong>
        </CoffeeListCardPrice>

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
      </CoffeeListCardFooter>
    </CoffeeListCardContainer>
  )
}
