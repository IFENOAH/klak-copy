import { useNavigate } from "react-router-dom"
import { BookmarkIcon, ChartPointerIcon, MoneySquareIcon, TrendsIcon } from "../../../../assets/generatedicons/generated"
import { Button } from "../../../../components/forms/button/button"
import { WhyChooseCard } from "../../../../components/global/whyChooseCard"
import { randomId } from "../../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        header: 'Stop manually confirming cash payments',
        text: `Matching proof of payments with your customer's profile is error prone and tedious.
        Automate payment collection with Klak and make it 2x faster.`,
        icon: <MoneySquareIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Smart invoicing, flexible as you want it to be',
        text: `Automate invoices to collect one time or recurring payments. 
        ersonalise invoice field to fit each customer and specific needs.`,
        icon: <BookmarkIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Shorten your payment cycles and accelerate cash flow',
        text: `Easily track customer details against payment history. Automate it with Klak, get paid 2x faster and improve your cash flow.`,
        icon: <ChartPointerIcon className="w-10 h-10 md:w-16 md:h-16" />
    },
    {
        id: randomId(),
        header: 'Get clear visibility into collections and receivables',
        text: `With Klak's ageing analysis engine, organise and categorise customer invoices by dates.
        Get a clear flow of customers who have paid and expected payments.`,
        icon: <TrendsIcon className="w-10 h-10 md:w-16 md:h-16" />

    },
]

export const AutoFeatureBenefits = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center w-full px-7 lg:px-28 max-w-screen-2xl gap-8">
            <h6 className="uppercase text-xs text-primary-400">What you can do</h6>
            <header className="w-full md:w-2/3 flex flex-col items-center justify-center gap-3 pb-6 md:pb-12">
                <h1 className="text-2xl md:text-4xl font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200">
                    Shorten your payment cycles, accelerate cash flow
                </h1>
                <span className="text-sm md:text-base text-center w-full md:w-2/3">
                    With Klak, you send invoices and reminders on time. Speed up payment collections from your clients
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

            <section className="w-full md:w-2/3 md:text-center flex flex-col gap-6 items-start md:items-center pt-12">
                <p className="text-base text-neutral-300">Manually confirming customer payments and sending invoices is inefficient. Automate it with Klak, get paid 2x faster and improve your cash flow.</p>

                <Button
                    onClick={() => navigate("/book-a-demo")}
                    className="bg-primary-100">
                    Book a Demo
                </Button>
            </section>
        </div>
    )
}