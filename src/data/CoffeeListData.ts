import EspressoImg from "../assets/Espresso.svg"
import AmericanEspressoImg from "../assets/American.svg"
import CreamyImg from "../assets/Creamy.svg"
import ColdEspressoImg from "../assets/ColdEspresso.svg"
import CoffeeMilkImg from "../assets/CoffeeMilk.svg"
import LatteImg from "../assets/Latte.svg"
import CapuccinoImg from "../assets/Capuccino.svg"
import MacchiatoImg from "../assets/Macchiato.svg"

import { Coffee } from "../interfaces"

export const CoffeeListData: Coffee[] = [
  {
    id: "1",
    labels: ["tradicional"],
    amount: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 790,
    image: EspressoImg,
  },
  {
    id: "2",
    labels: ["tradicional"],
    amount: 1,
    title: "Expresso Americano",
    description: "Expresso diluído menos intenso que o tradicional",
    price: 1200,
    image: AmericanEspressoImg,
  },
  {
    id: "3",
    labels: ["tradicional"],
    amount: 1,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 1590,
    image: CreamyImg,
  },
  {
    id: "4",
    labels: ["tradicional", "gelado"],
    amount: 1,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 1290,
    image: ColdEspressoImg,
  },
  {
    id: "5",
    labels: ["tradicional", "com leite"],
    amount: 1,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 990,
    image: CoffeeMilkImg,
  },
  {
    id: "6",
    labels: ["tradicional", "com leite"],
    amount: 1,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 1590,
    image: LatteImg,
  },
  {
    id: "7",
    labels: ["tradicional", "com leite"],
    amount: 1,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 1390,
    image: CapuccinoImg,
  },
  {
    id: "7",
    labels: ["tradicional", "com leite"],
    amount: 1,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 1590,
    image: MacchiatoImg,
  },
]
