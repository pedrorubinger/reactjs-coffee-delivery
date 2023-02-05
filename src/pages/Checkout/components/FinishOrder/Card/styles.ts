import styled from "styled-components"

export const FinishOrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme["base-card"]};
`
