import { SectionTitle } from "../SectionTitle"
import { FinishOrderContainer } from "./styles"

interface FinishOrderProps {}

export const FinishOrder: React.FC<FinishOrderProps> = () => {
  return (
    <FinishOrderContainer>
      <SectionTitle title="Complete seu pedido" />
    </FinishOrderContainer>
  )
}
