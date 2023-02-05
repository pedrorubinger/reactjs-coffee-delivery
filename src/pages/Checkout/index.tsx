import { Header } from "../../components/Header"
import { FinishOrder } from "./components/FinishOrder"
import { FinishOrderAddress } from "./components/FinishOrder/Address"
import { FinishOrderPayment } from "./components/FinishOrder/Payment"
import {
  CheckoutCardsSection,
  CheckoutContainer,
  CheckoutContent,
} from "./styles"

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <CheckoutContainer>
      <Header />

      <CheckoutContent>
        <FinishOrder />

        <CheckoutCardsSection>
          <FinishOrderAddress />

          <div>Second Card</div>

          <FinishOrderPayment />
        </CheckoutCardsSection>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
