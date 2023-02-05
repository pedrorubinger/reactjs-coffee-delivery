import { CreditCard, CurrencyDollar } from "phosphor-react"

import { FinishOrderCard } from "../Card"
import {
  FinishOrderPaymentCard,
  FinishOrderPaymentHeader,
  FinishOrderPaymentHeaderContent,
  FinishOrderPaymentOptions,
} from "./styles"

interface FinishOrderPaymentProps {}

export const FinishOrderPayment: React.FC<FinishOrderPaymentProps> = () => {
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
        <FinishOrderPaymentCard>
          <CreditCard size={16} />
          <span>Cartão de Crédito</span>
        </FinishOrderPaymentCard>

        <FinishOrderPaymentCard>
          <CreditCard size={16} />
          <span>Cartão de Crédito</span>
        </FinishOrderPaymentCard>

        <FinishOrderPaymentCard>
          <CreditCard size={16} />
          <span>Cartão de Crédito</span>
        </FinishOrderPaymentCard>
      </FinishOrderPaymentOptions>
    </FinishOrderCard>
  )
}
