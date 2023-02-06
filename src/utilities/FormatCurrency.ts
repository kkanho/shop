
const formatting = new Intl.NumberFormat(undefined, {
    currency: "HKD",
    style: 'currency'
})

export default function FormatCurrency(currency: number) {
    return (
        formatting.format(currency)
    )
}
