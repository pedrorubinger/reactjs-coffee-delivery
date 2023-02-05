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
`

export const CoffeeListTitle = styled.h2`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme["base-subtitle"]};
`
