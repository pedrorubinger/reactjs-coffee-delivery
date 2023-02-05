import styled from "styled-components"

interface StyledInputProps {
  /** @default "inherit" */
  width?: string | number
  /** @default 12.5 */
  minWidth?: string | number
}

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.25rem;
  padding: 0.75rem;

  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;

  :focus {
    outline: 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 7px 0px;
  }

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  color: ${({ theme }) => theme["base-label"]};

  width: ${({ width = "inherit" }) => (Number(width) ? `${width}rem` : width)};
  min-width: ${({ minWidth = 12.5 }) =>
    Number(minWidth) ? `${minWidth}rem` : minWidth};

  :disabled {
    opacity: 0.7;
    background-color: ${({ theme }) => theme["base-hover"]};
    color: ${({ theme }) => theme["base-text"]};
  }
`
