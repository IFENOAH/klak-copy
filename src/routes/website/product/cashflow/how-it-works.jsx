import { Tabs } from "../../../../components/primitives/tabs"
import { CashManagement } from "./components/cash-management"
import { CashForecast } from "./components/cash-forecast"

const tabs = [
    {
        id: 0,
        title: "Cash Flow Management",
        component: <CashManagement />
    },
    {
        id: 1,
        title: "Cash Flow Forecast",
        component: <CashForecast />
    },
]

export const HowDoesItWork = () => {

    return (
        <div className="flex flex-col gap-6 max-w-screen-2xl">
            <header className="flex items-center flex-col gap-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#161C2D]">How does it work?</h1>
                <h6 className="text-sm md:text-lg text-[#161C2D] text-center">To run a cashflow forecast on Klak, follow these steps.</h6>
            </header>

            <section className="">
                <Tabs tabs={tabs} />
            </section>
        </div>
    )
}