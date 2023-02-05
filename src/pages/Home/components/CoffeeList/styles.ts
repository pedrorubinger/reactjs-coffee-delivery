import styled from "styled-components"

export const CoffeeListContainer = styled.section`
  padding-top: 2rem;
  background: ${({ theme }) => theme["background"]};
`

export const CoffeeListContent = styled.div`
  padding: 0 10rem 6.75rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
    padding: 0 5rem 6.75rem;
  }

  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 420px) {
    padding: 0 2rem 6.75rem;
  }
`

export const CoffeeListCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  column-gap: 2rem;
  row-gap: 3rem;

  @media (max-width: 1430px) {
    grid-template-columns: 1fr 1fr;

    justify-items: center;
    margin: auto;

    row-gap: 5rem;

    justify-content: space-between;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const CoffeeListTitle = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;

  margin-bottom: 6rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme["base-subtitle"]};

  @media (max-width: 1430px) {
    display: block;
    text-align: center;
  }
`
