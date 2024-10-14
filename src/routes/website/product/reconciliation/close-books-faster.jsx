import { BinocularsIcon, BookmarkIcon, ChartPointerIcon, DecisionIcon, ForecastIcon, GreenArrowIcon, TimeRecordsIcon, TrendScreenIcon, TrendsIcon, VisibilityIcon } from "../../../../assets/generatedicons/generated"
import { WhyChooseCard } from "../../../../components/global/whyChooseCard"
import { randomId } from "../../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        title: "Customer Reconciliation",
        header: "Reconcile inflows with your customer's account in real time",
        text: `Detect errors early, get up-to-date view of your financial position,
        streamline the reconciliation process and free up time for more important processes.`,
        icon: <GreenArrowIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        title: "Bank Reconciliation",
        header: 'Instant bank statement to general ledger reconciliation',
        text: `Avoid the headaches from manually reconciling bank statements with your general ledger.
        Automate it with Klak and improve accuracy of your financial data.`,
        icon: <BookmarkIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Get an accurate report of your financial status',
        text: `After reconciling, get a report with the true picture of your finances.
        Spot fraud faster, block cash leakages and the smallest discrepancies with your numbers.`,
        icon: <TrendScreenIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Match thousands of transactions in seconds',
        text: `No matter how complex your books are, Klak's reconciliation engine matches
        10,000+ line transactions from multiple sources in seconds. Faster than any excel formula.`,
        icon: <TrendsIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
    {
        id: randomId(),
        header: 'A detailed record of your reconciliation history',
        text: `Klak maintains an audit trail of the reconciliation process and modifications to 
        flagged transaction for accountability and compliance purposes.`,
        icon: <TimeRecordsIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
    {
        id: randomId(),
        header: 'Eliminate double data entry error',
        text: `With Klak's 2-way sync engine, you automatically update the numbers on your accounting software and ledger.
        Avoid double posting, cut down on errors and reduce the time spent on reconciliation.`,
        icon: <BinocularsIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
]

export const CloseBooksFaster = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-7 lg:px-28 max-w-screen-2xl gap-12">
            <header className="w-full md:w-2/3 flex flex-col items-center justify-center gap-3">
                <h6 className="uppercase text-xs text-primary-400">What you can do</h6>
                <h1 className="text-2xl md:text-4xl font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200">
                    Close your books faster
                </h1>
                <span className="text-sm md:text-base text-center w-full md:w-2/3">
                    Save time on manual reconciliation and get insights that make you more efficient.
                    Make decisions faster with accurate data and set your business up for success.
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
                            title={benefit.title}
                        />
                    ))
                }
            </section>
        </div>
    )
}