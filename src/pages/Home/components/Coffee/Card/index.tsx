import { ShoppingCart } from "phosphor-react"
import { useContext } from "react"

import { PurchaseActions } from "../../../../../components/PurchaseActions"
import { CartContext } from "../../../../../contexts/CartContext"
import { Coffee } from "../../../../../interfaces"
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
  CoffeeCardDescription,
} from "./styles"

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const { onAddToCart } = useContext(CartContext)

  const cartButtonTitle = `Adicionar ${coffee.amount} ${
    coffee.amount === 1 ? "unidade" : "unidades"
  } de ${coffee.title} ao seu carrinho`
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
          <PurchaseActions coffee={coffee} />

          <CoffeeCardPurchaseCart
            title={cartButtonTitle}
            onClick={() => onAddToCart(coffee)}>
            <ShoppingCart size={20} weight="fill" />
          </CoffeeCardPurchaseCart>
        </CoffeeCardPurchaseContainer>
        {/*  */}
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
