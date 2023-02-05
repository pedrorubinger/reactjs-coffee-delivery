import { IconProps } from "phosphor-react"

export interface PaymentMethod {
  id: string
  name: string
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}
