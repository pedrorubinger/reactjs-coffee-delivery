import { SectionTitle } from "../SectionTitle"
import { ReviewOrderCard, ReviewOrderContainer } from "./styles"

interface ReviewOrderProps {}

export const ReviewOrder: React.FC<ReviewOrderProps> = () => {
  return (
    <ReviewOrderContainer>
      <SectionTitle title="Cafés selecionados" />

      <ReviewOrderCard>Teste</ReviewOrderCard>
    </ReviewOrderContainer>
  )
}
