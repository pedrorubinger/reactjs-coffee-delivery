import { MapPin } from "phosphor-react"

import { Input } from "../../../../../components/Input"
import { FinishOrderCard } from "../Card"
import {
  FinishOrderAddressForm,
  FinishOrderAddressHeader,
  FinishOrderAddressHeaderContent,
  FinishOrderAddressInputRow,
} from "./styles"

interface FinishOrderAddressProps {}

export const FinishOrderAddress: React.FC<FinishOrderAddressProps> = () => {
  return (
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

        <FinishOrderAddressInputRow>
          <Input id="number" placeholder="Número" width="45%" />

          <Input id="complement" placeholder="Complemento" />
        </FinishOrderAddressInputRow>

        <FinishOrderAddressInputRow>
          <Input id="district" placeholder="Bairro" width="35%" />

          <Input id="city" placeholder="Cidade" width="55%" disabled />

          <Input
            id="state"
            placeholder="UF"
            width="10%"
            minWidth="4.375rem"
            disabled
          />
        </FinishOrderAddressInputRow>
      </FinishOrderAddressForm>
    </FinishOrderCard>
  )
}
