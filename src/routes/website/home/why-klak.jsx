import { BarchartIcon, RecycleUserIcon, SafeDataIcon } from "../../../assets/generatedicons/generated"
import { WhyChooseCard } from "../../../components/global/whyChooseCard"
import { randomId } from "../../../helpers/random-id"

const WHY_KLAK = [
    {
        id: randomId(),
        header: 'Your data is in safe hands',
        text: `Trusting us with your financial data is a big responsibility.
        We maintain the industry's highest standards of security and data privacy.`,
        icon: 'safeicon'
    },
    {
        id: randomId(),
        header: 'An extension of your team',
        text: `We provide dedicated support anytime, anywhere. We're always ready to help.`,
        icon: 'manage'
    },
    {
        id: randomId(),
        header: 'Flexible to use',
        text: `Our simple and easy-to-use user interface makes it easy to adjust workflows as your business evolves.`,
        icon: 'track'
    },
]

const iconMap = {
    "safeicon": <SafeDataIcon />,
    "manage": <RecycleUserIcon />,
    "track": <BarchartIcon />,
}

export const WhyKlak = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-12 px-7 lg:px-28 max-w-screen-2xl">
            <p className="text-3xl md:text-5xl text-center font-extrabold text-primary-200">Why choose Klak?</p>

            <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {
                    WHY_KLAK.map((item) => (
                        <WhyChooseCard
                            key={item.id}
                            heading={item.header}
                            text={item.text}
                            icon={iconMap[item.icon]}
                        />
                    ))
                }
            </section>
        </div>
    )
}