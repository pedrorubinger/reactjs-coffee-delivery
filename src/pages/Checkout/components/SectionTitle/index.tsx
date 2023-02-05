import { StyledSectionTyle } from "./styles"

interface SectionTitleProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <StyledSectionTyle>{title}</StyledSectionTyle>
}
