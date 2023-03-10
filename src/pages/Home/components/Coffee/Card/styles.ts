import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  border-radius: 6px 36px;
  width: fit-content;
  height: fit-content;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5.5rem;

  background: ${({ theme }) => theme["base-card"]};

  @media (min-width: 420px) {
    min-width: 16rem;
    min-height: 19.375rem;
  }
`

export const CoffeeLabelCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
`

export const CoffeeLabelCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  background: ${({ theme }) => theme["yellow-light"]};
`

export const CoffeeCardLabelText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme["yellow-dark"]};
`

export const CoffeeCardImage = styled.img`
  top: -2rem;
  position: absolute;
`

export const CoffeeCardTitle = styled.h3`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;

  display: flex;
  align-items: flex-end;
  text-align: center;

  margin-top: 1rem;

  color: ${({ theme }) => theme["base-subtitle"]};
`

export const CoffeeCardDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;

  margin-top: 0.5rem;
  margin-bottom: 2.0625rem;
  padding: 0 1.25rem;

  color: ${({ theme }) => theme["base-label"]};
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;

  padding: 0 1.5rem 1.7rem;
  height: fit-content;
  width: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }
`

interface CoffeeCardPriceProps {
  fs: number
}

export const CoffeeCardPrice = styled.span<CoffeeCardPriceProps>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme["base-text"]};
  padding-bottom: 0.219rem;

  strong {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    flex-direction: row;
  }
`

export const CoffeeCardPurchaseContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeCardPurchaseCart = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 0;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;

  background: ${({ theme }) => theme["purple-dark"]};
  border-radius: 6px;

  transition: 0.4s;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["white"]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    /* background: ${({ theme }) => theme["purple"]}; */
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["purple"]};
  }
`
