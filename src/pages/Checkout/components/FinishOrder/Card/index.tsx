import { FinishOrderCardContainer } from "./styles"

interface FinishOrderCardProps {
  children: React.ReactNode
}

export const FinishOrderCard: React.FC<FinishOrderCardProps> = ({
  children,
}) => {
  return <FinishOrderCardContainer>{children}</FinishOrderCardContainer>
}
