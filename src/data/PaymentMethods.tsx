import { Bank, CreditCard, Money } from "phosphor-react"

import { PaymentMethod } from "../interfaces/PaymentMethod"

export const PaymentMethodsData: PaymentMethod[] = [
  {
    id: "1",
    name: "Cartão de Crédito",
    Icon: CreditCard,
  },
  {
    id: "2",
    name: "Cartão de Débito",
    Icon: Bank,
  },
  {
    id: "3",
    name: "Dinheiro",
    Icon: Money,
  },
]
