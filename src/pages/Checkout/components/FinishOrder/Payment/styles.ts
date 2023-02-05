import styled from "styled-components"

export const FinishOrderPaymentHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
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
`

export const FinishOrderPaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.65rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme["base-text"]};
  }
`
