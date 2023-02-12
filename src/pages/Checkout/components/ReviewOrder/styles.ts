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

  @media (max-width: 460px) {
    padding: 1.5rem;
  }
`

export const ReviewOrderCardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  padding: 0.5rem 0.25rem 1.5rem;
  gap: 1.25rem;

  background: ${({ theme }) => theme["base-card"]};
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
`

export const ReviewOrderCardItemImg = styled.img`
  width: 4rem;
  height: 4rem;
`

export const ReviewOrderCartItemContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  width: 100%;
`

export const ReviewOrderCardItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h2 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1rem;

    text-align: right;

    color: ${({ theme }) => theme["base-text"]};
  }

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ReviewOrderCardItemFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 410px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ReviewOrderRemoveItemButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 2rem;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${({ theme }) => theme["base-button"]};
  border: none;
  border-radius: 6px;

  cursor: pointer;
  transition: background-color 0.4s;

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme["base-text"]};
  }

  &:hover {
    background: ${({ theme }) => theme["base-hover"]};
  }

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`

export const ReviewOrderCartFooter = styled.div`
  padding: 0.5rem 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 0.75rem;
`

export const ReviewOrderCartFooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 0.5rem;
  padding: 0px;

  h4,
  h5 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-text"]};
  }

  h4 {
    font-size: 1rem;
  }

  &:nth-child(3) {
    h4,
    h5 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${({ theme }) => theme["base-subtitle"]};
    }
  }
`

export const FinishOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  background: ${({ theme }) => theme["yellow"]};
  border: none;
  border-radius: 6px;

  transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["yellow-dark"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme["white"]};
    font-stretch: 100;
  }
`

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const EmptyCartText = styled.span`
  color: ${({ theme }) => theme["base-text"]};
`
