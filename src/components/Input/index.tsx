import React, { forwardRef } from "react"

import { StyledInput } from "./styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** @default "inherit" */
  width?: string | number
  /** @default 12.5 */
  minWidth?: string | number
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ minWidth, width, ...rest }, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <StyledInput ref={ref} width={width} minWidth={minWidth} {...rest} />
  }
)
