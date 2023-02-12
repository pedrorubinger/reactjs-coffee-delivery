import { useContext } from "react"

import { CartContext } from "../../../../contexts/CartContext"
import { formatCurrency } from "../../../../utils"
import { PurchaseActions } from "../../../../components/PurchaseActions"
import { SectionTitle } from "../SectionTitle"
import {
  EmptyCartContainer,
  EmptyCartText,
  FinishOrderButton,
  ReviewOrderCard,
  ReviewOrderCardItem,
  ReviewOrderCardItemFooter,
  ReviewOrderCardItemHeader,
  ReviewOrderCardItemImg,
  ReviewOrderCartFooter,
  ReviewOrderCartFooterRow,
  ReviewOrderCartItemContent,
  ReviewOrderContainer,
  ReviewOrderRemoveItemButton,
} from "./styles"
import { SmileySad, TrashSimple } from "phosphor-react"

interface ReviewOrderProps {}

export const ReviewOrder: React.FC<ReviewOrderProps> = () => {
  const { cart, onRemoveCartItem } = useContext(CartContext)

  const getTotal = () => {
    const items = cart.map((item) => item.price * item.amount)
    const total = items.reduce((acc, curr) => acc + curr, 0)

    return total
  }

  const isCartEmpty = !cart?.length
  const total = getTotal()
  const shippingFee = 350

  return (
    <ReviewOrderContainer>
      <SectionTitle title="Cafés selecionados" />

      <ReviewOrderCard>
        {!!isCartEmpty && (
          <EmptyCartContainer>
            <SmileySad size={25} />
            <EmptyCartText>O seu carrinho de compras está vazio.</EmptyCartText>
          </EmptyCartContainer>
        )}

        {!isCartEmpty &&
          cart.map((coffee) => {
            return (
              <ReviewOrderCardItem key={coffee.id}>
                <ReviewOrderCardItemImg src={coffee.image} />

                <ReviewOrderCartItemContent>
                  <ReviewOrderCardItemHeader>
                    <h2>{coffee.title}</h2>
                    <h3>
                      {formatCurrency(coffee.price * coffee.amount, true)}
                    </h3>
                  </ReviewOrderCardItemHeader>

                  <ReviewOrderCardItemFooter>
                    <PurchaseActions
                      coffee={coffee}
                      height={2}
                      onChangeType="cart"
                    />

                    <ReviewOrderRemoveItemButton
                      onClick={() => onRemoveCartItem(coffee.id)}>
                      <TrashSimple size={16} />
                      <span>Remover</span>
                    </ReviewOrderRemoveItemButton>
                  </ReviewOrderCardItemFooter>
                </ReviewOrderCartItemContent>
              </ReviewOrderCardItem>
            )
          })}

        {!isCartEmpty && (
          <ReviewOrderCartFooter>
            <ReviewOrderCartFooterRow>
              <h5>Total de itens</h5>
              <h4>{formatCurrency(total, true)}</h4>
            </ReviewOrderCartFooterRow>

            <ReviewOrderCartFooterRow>
              <h5>Taxa de entrega</h5>
              <h4>{formatCurrency(shippingFee, true)}</h4>
            </ReviewOrderCartFooterRow>

            <ReviewOrderCartFooterRow>
              <h5>Total</h5>
              <h4>{formatCurrency(shippingFee + total, true)}</h4>
            </ReviewOrderCartFooterRow>

            <FinishOrderButton>
              <span>Confirmar pedido</span>
            </FinishOrderButton>
          </ReviewOrderCartFooter>
        )}
      </ReviewOrderCard>
    </ReviewOrderContainer>
  )
}
