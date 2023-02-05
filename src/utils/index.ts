export const formatCurrency = (value: number, useStyles?: boolean) => {
  return new Intl.NumberFormat("pt-BR", {
    style: useStyles ? "currency" : undefined,
    currency: useStyles ? "BRL" : undefined,
    minimumFractionDigits: 2,
  }).format(value / 100)
}
