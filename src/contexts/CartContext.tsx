import React, { createContext, useState } from "react"

import { Coffee } from "../interfaces"
import { CoffeeListData } from "../data/CoffeeListData"

type ChangeAmountType = "cart" | "list"

interface CartContextType {
  cart: Coffee[]
  coffeeList: Coffee[]
  cartCoffeeIds: string[]
  onRemoveCartItem: (id: string) => void
  onAddToCart: (coffee: Coffee) => void
  onChangeAmount: (
    operation: "-" | "+",
    id: string,
    type?: ChangeAmountType
  ) => void
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

  const onChangeAmount = (
    operation: "-" | "+",
    id: string,
    type: ChangeAmountType = "list"
  ) => {
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

    if (type === "cart") {
      setCart((prev) =>
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
  }

  const onAddToCart = (coffee: Coffee) => {
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

  return (
    <CartContext.Provider
      value={{
        cart,
        coffeeList,
        cartCoffeeIds,
        onAddToCart,
        onChangeAmount,
        onRemoveCartItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}
