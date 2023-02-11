import React, { createContext, useState } from "react"

import { Coffee } from "../interfaces"
import { CoffeeListData } from "../data/CoffeeListData"

interface CartContextType {
  cart: Coffee[]
  coffeeList: Coffee[]
  cartCoffeeIds: string[]
  onRemoveCartItem: (id: string) => void
  onChangeCartItem: (coffee: Coffee, op: "+" | "-") => void
  onChangeAmount: (operation: "-" | "+", id: string) => void
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<Coffee[]>([])
  const [cartCoffeeIds, setCartCoffeeIds] = useState<string[]>([])
  const [coffeeList, setCoffeeList] = useState<Coffee[]>(CoffeeListData)

  const onRemoveCartItem = (coffeeId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== coffeeId))
    setCartCoffeeIds((prev) => prev.filter((id) => id !== coffeeId))
  }

  const onChangeAmount = (operation: "-" | "+", id: string) => {
    const getAmount = (amount: number): number => {
      if (amount <= 0) return 1
      if (amount >= 50) return 50

      return amount
    }

    setCoffeeList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let itemAmount = item.amount
          const amount = operation === "+" ? ++itemAmount : --itemAmount ?? 1

          return { ...item, amount: getAmount(amount) }
        }

        return { ...item }
      })
    )
  }

  const onChangeCartItem = (coffee: Coffee, op: "+" | "-") => {
    if (op === "-") {
      setCartCoffeeIds((prev) => [...prev].filter((id) => coffee.id !== id))
      setCart((prev) => [...prev].filter((item) => item.id !== coffee.id))
      return
    }

    if (op === "+") {
      const isCoffeeAlreadyInCart = cartCoffeeIds.includes(coffee.id)

      if (isCoffeeAlreadyInCart) {
        const coffeeInCart = cart.find((item) => item.id === coffee.id)

        if (coffee.amount !== coffeeInCart?.amount) {
          setCart((prev) =>
            [...prev].map((item) => {
              if (item.id === coffee.id) {
                return { ...coffee }
              }

              return { ...item }
            })
          )
        }

        return
      }

      setCartCoffeeIds((prev) => [...prev, coffee.id])
      setCart((prev) => [{ ...coffee }, ...prev])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        coffeeList,
        cartCoffeeIds,
        onChangeCartItem,
        onChangeAmount,
        onRemoveCartItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}
