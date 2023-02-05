import { MapPin, ShoppingCart } from "phosphor-react"

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
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="" />

      <HeaderActionsContainer>
        <HeaderLocationAction>
          <MapPin size={22} weight="fill" />
          Belo Horizonte, MG
        </HeaderLocationAction>

        <HeaderCartAction>
          <HeaderCartCounter>3</HeaderCartCounter>
          <ShoppingCart size={22} weight="fill" />
        </HeaderCartAction>
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
