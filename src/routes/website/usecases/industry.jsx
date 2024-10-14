import { BookmarkIcon, ChartPointerIcon, MoneySquareIcon, TrendsIcon } from "../../../assets/generatedicons/generated"
import { WhyChooseCard } from "../../../components/global/whyChooseCard"
import { randomId } from "../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        header: 'Automated financial operations for FMCG businesses',
        text: `Klak's industry-specific finance automation solution helps you take control of your finance operations, 
        and free up time to focus on strategy and profitability.`,
        icon: <MoneySquareIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Automated financial operations for Construction businesses',
        text: `Klak's industry-specific finance automation solution helps you take control of your finance operations, 
        and free up time to focus on strategy and profitability.`,
        icon: <ChartPointerIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Automated financial operations for Hospitality businesses',
        text: `Klak's industry-specific finance automation solution helps you take control of your finance operations, 
        and free up time to focus on strategy and profitability.`,
        icon: <TrendsIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Automated financial operations for Healthcare businesses',
        text: `Klak's industry-specific finance automation solution helps you take control of your finance operations, 
        and free up time to focus on strategy and profitability.`,
        icon: <BookmarkIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
]

export const IndustryCase = () => {
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
                        />
                    ))
                }
            </section>
        </div>
    )
}