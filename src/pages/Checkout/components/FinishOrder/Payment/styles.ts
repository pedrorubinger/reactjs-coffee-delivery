import styled from "styled-components"

export const FinishOrderPaymentHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  margin-bottom: 0.5rem;
`

export const FinishOrderPaymentHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h4 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme["base-subtitle"]};
  }

  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme["base-text"]};
  }
`

export const FinishOrderPaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (max-width: 724px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 75%;
      min-width: 190px;
    }
  }
`

interface FinishOrderPaymentBtnProps {
  /** @default false */
  isSelected?: boolean
}

export const FinishOrderPaymentButton = styled.button<FinishOrderPaymentBtnProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  background: ${({ theme, isSelected = false }) =>
    isSelected ? theme["purple"] : theme["base-button"]};
  border-radius: 6px;
  border: none;

  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: ${({ isSelected, theme }) =>
      !isSelected && theme["base-hover"]};
  }

  svg {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme["white"] : theme["purple"]};
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;

    color: ${({ theme, isSelected }) =>
      isSelected ? theme["white"] : theme["base-text"]};
  }
`
