import { Tabs } from "../../../../components/primitives/tabs"
import { Customers } from "./components/customers"
import { Invoices } from "./components/invoices"

const tabs = [
    {
        id: 0,
        title: "Customers",
        component: <Customers />
    },
    {
        id: 1,
        title: "Invoices",
        component: <Invoices />
    },
]

export const HowDoesAutoWork = () => {

    return (
        <div className="flex flex-col gap-6 px-7 lg:px-28 max-w-screen-2xl">
            <header className="flex items-center flex-col gap-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#161C2D]">How does it work?</h1>
                <h6 className="text-sm md:text-lg text-neutral-100">To run a cashflow forecast on Klak, follow these steps.</h6>
            </header>

            <section className="">
                <Tabs tabs={tabs} />
            </section>
        </div>
    )
}