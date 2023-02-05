import styled from "styled-components"

export const ReviewOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ReviewOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 2.5rem;

  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 44px;
`
