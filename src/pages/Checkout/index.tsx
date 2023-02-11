import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { CartContext } from "../../contexts/CartContext"
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
  const [isMounted, setIsMounted] = useState(false)
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!cart.length) {
      navigate("/")
    } else {
      setIsMounted(true)
    }
  }, [])

  if (!isMounted) {
    return null
  }

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
