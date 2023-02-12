import { CurrencyDollar } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../../../../contexts/CartContext"

import { PaymentMethodsData } from "../../../../../data/PaymentMethods"
import { FinishOrderCard } from "../Card"
import {
  FinishOrderPaymentButton,
  FinishOrderPaymentHeader,
  FinishOrderPaymentHeaderContent,
  FinishOrderPaymentOptions,
} from "./styles"

interface FinishOrderPaymentProps {}

export const FinishOrderPayment: React.FC<FinishOrderPaymentProps> = () => {
  const { paymentMethod, onSelectPaymentMethod } = useContext(CartContext)

  return (
    <FinishOrderCard>
      <FinishOrderPaymentHeader>
        <CurrencyDollar size={18} weight="regular" />

        <FinishOrderPaymentHeaderContent>
          <h4>Pagamento</h4>
          <h5>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h5>
        </FinishOrderPaymentHeaderContent>
      </FinishOrderPaymentHeader>

      <FinishOrderPaymentOptions>
        {PaymentMethodsData.map(({ id, name, Icon }) => {
          const isSelected = id === paymentMethod?.id

          return (
            <FinishOrderPaymentButton
              key={id}
              title={`Pagar com ${name.toLowerCase()}`}
              onClick={() => onSelectPaymentMethod(id)}
              isSelected={isSelected}>
              <Icon size={16} />
              <span>{name}</span>
            </FinishOrderPaymentButton>
          )
        })}
      </FinishOrderPaymentOptions>
    </FinishOrderCard>
  )
}
