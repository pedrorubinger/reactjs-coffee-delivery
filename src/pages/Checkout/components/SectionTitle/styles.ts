import styled from "styled-components"

export const StyledSectionTyle = styled.h3`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;

  display: flex;
  align-items: center;
  gap: 0.9375rem;

  margin-bottom: 0.9375rem;
  color: ${({ theme }) => theme["base-subtitle"]};
`
