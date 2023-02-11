import styled from "styled-components"

interface ActionsProps {
  /** @default 2.375 (in rem) */
  height?: number
}

export const CoffeeCardPurchaseActions = styled.div<ActionsProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  width: 4.5rem;
  height: ${({ height = 2.375 }) => height}rem;
  border-radius: 6px;

  background: ${({ theme }) => theme["base-button"]};
`

export const CoffeeCardPurchaseAmount = styled.span``

export const CoffeeCardPurchaseControl = styled.button`
  display: flex;

  border: 0;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`
