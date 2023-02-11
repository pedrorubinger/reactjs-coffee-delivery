import { MapPin } from "phosphor-react"

import { Input } from "../../../../../components/Input"
import { SectionTitle } from "../../SectionTitle"
import { FinishOrderCard } from "../Card"
import {
  FinishOrderAddressContainer,
  FinishOrderAddressForm,
  FinishOrderAddressHeader,
  FinishOrderAddressHeaderContent,
  FinishOrderAddressInputRow,
} from "./styles"

interface FinishOrderAddressProps {}

export const FinishOrderAddress: React.FC<FinishOrderAddressProps> = () => {
  return (
    <FinishOrderAddressContainer>
      <SectionTitle title="Complete seu pedido" />

      <FinishOrderCard>
        <FinishOrderAddressHeader>
          <MapPin size={18} weight="regular" />

          <FinishOrderAddressHeaderContent>
            <h4>Endereço de Entrega</h4>
            <h5>Informe o endereço onde deseja receber seu pedido</h5>
          </FinishOrderAddressHeaderContent>
        </FinishOrderAddressHeader>

        <FinishOrderAddressForm>
          <Input id="postalCode" placeholder="CEP" width="35%" />

          <FinishOrderAddressInputRow width="100%">
            <Input id="street" placeholder="Rua" width="100%" />
          </FinishOrderAddressInputRow>

          <FinishOrderAddressInputRow id="finish-order-second-row">
            <Input id="number" placeholder="Número" width="45%" />

            <Input id="complement" placeholder="Complemento" />
          </FinishOrderAddressInputRow>

          <FinishOrderAddressInputRow id="finish-order-last-row">
            <Input id="district" placeholder="Bairro" width="35%" />

            <Input
              id="city"
              placeholder="Cidade"
              title="Este campo é preenchido automaticamente com base no seu CEP"
              width="55%"
              disabled
            />

            <Input
              id="state"
              placeholder="UF"
              title="Este campo é preenchido automaticamente com base no seu CEP"
              width="10%"
              minWidth="4.375rem"
              disabled
            />
          </FinishOrderAddressInputRow>
        </FinishOrderAddressForm>
      </FinishOrderCard>
    </FinishOrderAddressContainer>
  )
}
