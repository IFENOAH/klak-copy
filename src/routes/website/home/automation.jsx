import { randomId } from "../../../helpers/random-id"
import Insights from "../../../assets/images/insights.png"
import Transparency from "../../../assets/images/transparency.png"
import Payments from "../../../assets/images/payments.png"
import Leakages from "../../../assets/images/leakages.png"
// import { AutomateLayoutCard } from "../../../components/global/automatelayoutcard"


const AUTOMATE_IDEAS = [
    {
        id: randomId(),
        heading: "Steer your business strategy with insights",
        subheading: "Have full oversight on the biggest moving parts and smallest details of your finances. Make data-backed financial decisions to grow your business",
        image: Insights
    },
    {
        id: randomId(),
        heading: "Improve transparency and teamwork",
        subheading: `With approval and workflow automation in place, every transaction becomes transparent, and collaboration among team members is improved`,
        image: Transparency
    },
    {
        id: randomId(),
        heading: "Spend less time chasing payments",
        subheading: `Increase your payment collection rate, automate your accounts receivable process, recover late and missed payments easily`,
        image: Payments
    },
    {
        id: randomId(),
        heading: "Save time and block leakages in your business",
        subheading: `Say goodbye to time-consuming, manual, and error-prone processes that cause leakages in your financial operations`,
        image: Leakages
    },
]

export const Automation = () => {

    return (
        <div className="w-full flex items-center justify-center flex-col gap-12">
            <header className="w-full sticky top-[3.2rem] md:top-16 bg-white left-0 right-0 p-4 flex items-center justify-center z-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary-200 text-center w-full md:w-3/4 md:leading-[3.8rem]">
                    One platform to automate your daily financial operations
                </h1>
            </header>

            {/* <main className="w-full flex flex-col gap-14 md:gap-20">
                {
                    AUTOMATE_IDEAS.map((idea, index) => (
                        <AutomateLayoutCard
                            key={idea.id}
                            heading={idea.heading}
                            subheading={idea.subheading}
                            image={idea.image}
                            swap={index % 2}
                            dataAos={index % 2 === 0 ? 'fade-right' : 'fade-left'}  // alternate AOS animation
                        />
                    ))
                }
            </main> */}
        </div>
    )
}