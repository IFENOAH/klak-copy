import { AutoForcastCard } from "../../../../../components/global/autoForcastCard"

export const CUSTOMERS_DATA = [
    {
        text: `Create a new customer profile or import existing customer details to Klak, and assign each customer to a Sales reps`
    },
    {
        text: `A Dedicated Virtual Account (DVA) is assigned to each customer profile you created or imported`
    },
    {
        text: `Customers pay into the DVA, payment is reconciled in real-time, and settled into your company bank account in T+2`
    },
]

export const Customers = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {
                CUSTOMERS_DATA?.map((data, index) => (
                    <AutoForcastCard
                        key={index}
                        index={index + 1}
                        text={data.text}
                    />
                ))
            }
        </div>
    )
}