import styled from "styled-components"

import BlurImage from "../../../../assets/IntroBlur.svg"

export const IntroContainer = styled.section`
  margin-top: 5rem;

  @media (max-width: 1050px) {
    margin-top: 3rem;
  }
`

export const ContentBackground = styled.div`
  background-image: url(${BlurImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: blur(80px);
  -webkit-filter: blur(80px);

  height: 100%;
  width: 100%;

  z-index: -10;
  position: fixed;
  left: 0;
`

export const IntroContent = styled.div`
  padding: 0 10rem 5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 5rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
    padding: 0 5rem;
  }
`

export const IntroTextualContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
`

export const IntroTitle = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.3;

  color: ${({ theme }) => theme["base-title"]};
`

export const IntroSubtitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-stretch: 100;

  color: ${({ theme }) => theme["base-subtitle"]};
`

export const IntroCoffeeImage = styled.img`
  @media (max-width: 500px) {
    width: 400px;
    height: 284px;
  }

  @media (max-width: 360px) {
    width: 350px;
    height: 234px;
  }
`

export const IntroItemsContent = styled.div`
  margin-top: 3rem;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 1.25rem;

  @media (max-width: 1370px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 692px) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: fit-content;
  gap: 0.75rem;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme["base-text"]};
`

interface IntroItemIconContainerProps {
  variant: "yellow" | "yellow-dark" | "purple" | "base-text"
}

export const IntroItemIconContainer = styled.div<IntroItemIconContainerProps>`
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;

  padding: 0.5rem;
  gap: 0.5rem;

  color: ${({ theme }) => theme.white};
  background: ${({ variant, theme }) => theme[variant]};
`
