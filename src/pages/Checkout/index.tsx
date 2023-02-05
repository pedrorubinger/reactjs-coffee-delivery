import { Header } from "../../components/Header"
import { FinishOrderAddress } from "./components/FinishOrder/Address"
import { FinishOrderPayment } from "./components/FinishOrder/Payment"
import { ReviewOrder } from "./components/ReviewOrder"
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
        <CheckoutCardsSection>
          <FinishOrderAddress />

          <ReviewOrder />

          <FinishOrderPayment />
        </CheckoutCardsSection>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
