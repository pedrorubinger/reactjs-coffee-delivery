import {
  ContentBackground,
  IntroCoffeeImage,
  IntroContainer,
  IntroContent,
  IntroItem,
  IntroItemIconContainer,
  IntroItemsContent,
  IntroSubtitle,
  IntroTextualContent,
  IntroTitle,
} from "./styles"

import CoffeeImage from "../../../../assets/CoffeeIntro.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <ContentBackground />

        <IntroTextualContent>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia!
          </IntroTitle>

          <IntroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora!
          </IntroSubtitle>

          <IntroItemsContent>
            <IntroItem>
              <IntroItemIconContainer variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </IntroItemIconContainer>
              Compra simples e segura
            </IntroItem>

            <IntroItem>
              <IntroItemIconContainer variant="base-text">
                <Package size={16} weight="fill" />
              </IntroItemIconContainer>
              Embalagem mantém o café intacto
            </IntroItem>

            <IntroItem>
              <IntroItemIconContainer variant="yellow">
                <Timer size={16} weight="fill" />
              </IntroItemIconContainer>
              Entrega rápida e rastreada
            </IntroItem>

            <IntroItem>
              <IntroItemIconContainer variant="purple">
                <Coffee size={16} weight="fill" />
              </IntroItemIconContainer>
              O café chega quentinho até você
            </IntroItem>
          </IntroItemsContent>
        </IntroTextualContent>

        <IntroCoffeeImage src={CoffeeImage} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
