import { title } from "framer-motion/client"
import { BookmarkIcon, ChartPointerIcon, MoneySquareIcon, TrendsIcon } from "../../../assets/generatedicons/generated"
import { WhyChooseCard } from "../../../components/global/whyChooseCard"
import { randomId } from "../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        title: "CFOs",
        header: 'Manage your financial engine in real-time',
        text: `Have full oversight on the biggest moving parts and the smallest details of your entire finance. 
        Give data backed cash projections and advice to the board, CEO and the management team.`,
        icon: <MoneySquareIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        title: "Finance Teams",
        header: 'No more last minute hustle to close the books',
        text: `Accurately match data and transactions across all your spreadsheets and bank statements with accuracy. 
        Less time staring at Excel, more time to do important work.`,
        icon: <ChartPointerIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        title: "Sales/Operations",
        header: 'Streamline your collection process, spend less time chasing invoices',
        text: `Manage payments collection, automate invoicing and email reminders for due and late payments to customers. 
        Free up time to focus on your primary tasks.`,
        icon: <TrendsIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        title: "Controllers",
        header: 'Less time nitpicking data, more time for strategic ops',
        text: `Centralize all your financial data from multiple banks, payment providers and
         General Ledger to enjoy robust cashflow and treasury management.`,
        icon: <BookmarkIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
]

export const RoleCase = () => {
    return (
        <div className="flex flex-col items-center w-full px-7 lg:px-28 max-w-screen-2xl gap-8 py-12">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    BENEFITS.map((benefit) => (
                        <WhyChooseCard
                            key={benefit.id}
                            heading={benefit.header}
                            text={benefit.text}
                            icon={benefit.icon}
                            title={benefit.title}
                            font="font-extrabold lg:text-xl"
                        />
                    ))
                }
            </section>
        </div>
    )
}