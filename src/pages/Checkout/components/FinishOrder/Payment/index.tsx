import { CurrencyDollar } from "phosphor-react"

import { PaymentMethodsData } from "../../../../../data/PaymentMethods"
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
        {PaymentMethodsData.map(({ id, name, Icon }) => (
          <FinishOrderPaymentCard
            key={id}
            title={`Pagar com ${name.toLowerCase()}`}>
            <Icon size={16} />
            <span>{name}</span>
          </FinishOrderPaymentCard>
        ))}
      </FinishOrderPaymentOptions>
    </FinishOrderCard>
  )
}
