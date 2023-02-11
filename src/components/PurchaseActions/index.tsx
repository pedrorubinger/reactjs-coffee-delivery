import { Minus, Plus } from "phosphor-react"
import React, { useContext } from "react"

import { CartContext } from "../../contexts/CartContext"
import { Coffee } from "../../interfaces"
import {
  CoffeeCardPurchaseAmount,
  CoffeeCardPurchaseActions,
  CoffeeCardPurchaseControl,
} from "./styles"

interface Props {
  coffee: Coffee
  /** @default 2.375 (in rem) */
  height?: number
}

export const PurchaseActions: React.FC<Props> = ({ coffee, height }) => {
  const { onChangeAmount } = useContext(CartContext)

  return (
    <CoffeeCardPurchaseActions height={height}>
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
    </CoffeeCardPurchaseActions>
  )
}
