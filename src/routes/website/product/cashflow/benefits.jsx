import { DecisionIcon, ForecastIcon, TrendsIcon, VisibilityIcon } from "../../../../assets/generatedicons/generated"
import { WhyChooseCard } from "../../../../components/global/whyChooseCard"
import { randomId } from "../../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        header: 'Clear visibility into your cash flow',
        text: `See real time cash balance across each individual connected bank accounts and cumulatively. 
        Easily drill down to each line-transaction - all in one unified dashboard.`,
        icon: <VisibilityIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Forecast cash flow with accuracy',
        text: `Business is unpredictable. Easily forecast your cash flow with less volatility and more accuracy. 
        Set up rule-based alerts to keep you in check with your monthly budgeted expenses and liabilities to optimize cash flow.`,
        icon: <ForecastIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'A smarter way to track cash flow trends',
        text: `Get a granular view of your cash flow trends by using Klak's smart tagging system to automatically categorize bank transactions. 
        Customize and manage your own categorization rules.`,
        icon: <TrendsIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Smart cashflow insights to help you make better decisions',
        text: `Unify all your financial data and get a clear view of your financial health. 
        Get real-time updates of cashflow and make data backed decisions that set you up for success.`,
        icon: <DecisionIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
]

export const FeatureBenefits = () => {
    return (
        <div className="flex flex-col items-center w-full px-7 lg:px-28 max-w-screen-2xl gap-8">
            <h6 className="uppercase text-xs text-primary-400">What you can do</h6>
            <header className="w-full md:w-2/3 flex flex-col items-center justify-center gap-3">
                <h1 className="text-2xl md:text-4xl font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200">
                    Consolidate all your financial data sources <span className="text-3xl md:text-[4rem] text-primary-300 whitespace-nowrap">into one platform</span></h1>
                <span className="text-sm md:text-base text-center w-full md:w-2/3">
                    Juggling multiple bank accounts and accounting software is chaotic. You miss nothing
                    when you manage your inflows and outflows on Klak.
                </span>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    BENEFITS.map((benefit) => (
                        <WhyChooseCard
                            key={benefit.id}
                            heading={benefit.header}
                            text={benefit.text}
                            icon={benefit.icon}
                        />
                    ))
                }
            </section>
        </div>
    )
}