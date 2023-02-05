import styled from "styled-components"

export const HeaderContainer = styled.div`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme["background"]};

  @media (max-width: 1050px) {
    padding: 2rem 15rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 2rem 5rem 0;
  }
`

export const LogoImage = styled.img`
  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`

export const HeaderActionsContainer = styled.header`
  display: flex;
  gap: 0.75rem;

  margin-left: 0.5rem;
`

export const HeaderLocationAction = styled.div`
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;

  color: ${({ theme }) => theme["purple-dark"]};
  background-color: ${({ theme }) => theme["purple-light"]};

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme["purple"]};
  }
`

export const HeaderCartAction = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme["yellow-light"]};

  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme["yellow"]};

    svg {
      color: ${({ theme }) => theme["white"]};
    }
  }
`

export const HeaderCartCounter = styled.div`
  position: absolute;

  top: -0.64rem;
  left: 1.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  font-size: 0.75rem;
  color: ${({ theme }) => theme["white"]};

  background-color: ${({ theme }) => theme["yellow-dark"]};
`
