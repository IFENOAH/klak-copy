import { AutoForcastCard } from "../../../../../components/global/autoForcastCard"

export const CUSTOMERS_DATA = [
    {
        text: `Create an invoice and input the required details`
    },
    {
        text: `Indicate if invoice full payment or partial payment is required`
    },
    {
        text: `If you’ve synced your accounting software/ERP with Klak, you can select the ledger your invoice transaction should be posted to for reconciliation`
    },
    {
        text: `Review, save for later, download, or send invoice to assigned customer via email/whatsapp/SMS`
    },
    {
        text: `Customer pays invoice with the payment button embedded in the invoice`
    },
    {
        text: `See AR ageing analysis and insights on collections and customers transaction history`
    },
]

export const Invoices = () => {
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