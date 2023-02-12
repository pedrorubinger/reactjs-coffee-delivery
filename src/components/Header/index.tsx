import { useContext } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { MapPin, ShoppingCart } from "phosphor-react"

import { CartContext } from "../../contexts/CartContext"
import {
  HeaderActionsContainer,
  HeaderCartAction,
  HeaderCartCounter,
  HeaderContainer,
  HeaderLocationAction,
  LogoImage,
} from "./styles"
import Logo from "../../assets/Logo.svg"

export const Header = () => {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const location = useLocation()
  const checkoutRoute = "/checkout"
  const isInCheckoutPage = location.pathname === checkoutRoute

  const cartLength = cart?.length
  const cartButtonTitle = cartLength
    ? "Clique para ver os itens do carrinho"
    : "Seu carrinho está vazio"

  const onGoToCart = () => {
    if (!cartLength) return

    navigate(checkoutRoute)
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoImage src={Logo} alt="" />
      </NavLink>

      <HeaderActionsContainer>
        <HeaderLocationAction>
          <MapPin size={22} weight="fill" />
          Belo Horizonte, MG
        </HeaderLocationAction>

        {!isInCheckoutPage && (
          <HeaderCartAction title={cartButtonTitle} onClick={onGoToCart}>
            {!!cartLength && (
              <HeaderCartCounter>{cartLength}</HeaderCartCounter>
            )}
            <ShoppingCart size={22} weight="fill" />
          </HeaderCartAction>
        )}
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
