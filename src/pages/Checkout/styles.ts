import styled from "styled-components"

export const CheckoutContainer = styled.div``

export const CheckoutContent = styled.div`
  margin-top: 2.5rem;
  padding: 0 10rem 5rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
    padding: 0 5rem;
  }
`

export const CheckoutCardsSection = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: auto;

  row-gap: 1.25rem;
  column-gap: 2rem;

  margin-top: 0.9375rem;
`
