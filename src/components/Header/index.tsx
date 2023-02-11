import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
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

  const cartLength = cart?.length
  const cartButtonTitle = cartLength
    ? "Clique para ver os itens do carrinho"
    : "Seu carrinho está vazio"

  const onGoToCart = () => {
    if (!cartLength) return

    navigate("/checkout")
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

        <HeaderCartAction title={cartButtonTitle} onClick={onGoToCart}>
          {!!cartLength && <HeaderCartCounter>{cartLength}</HeaderCartCounter>}
          <ShoppingCart size={22} weight="fill" />
        </HeaderCartAction>
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
