import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { CartContextProvider } from "./contexts/CartContext"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/Default"
import { GlobalStyles } from "./styles/themes/Global"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}
