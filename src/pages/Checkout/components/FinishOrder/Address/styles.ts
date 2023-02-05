import styled from "styled-components"

export const FinishOrderAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FinishOrderAddressHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  margin-bottom: 0.5rem;
`

export const FinishOrderAddressHeaderContent = styled.div`
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

export const FinishOrderAddressForm = styled.form`
  width: 100%;
`

interface FinishOrderAddressInputRowProps {
  width?: string
}

export const FinishOrderAddressInputRow = styled.div<FinishOrderAddressInputRowProps>`
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  margin-top: 1rem;
  width: ${({ width = "inherit" }) => width};
`
