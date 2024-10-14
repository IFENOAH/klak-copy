import { AirplaneIcon, BriefCaseIcon, GreenHeartIcon, YellowBookIcon } from "../../../assets/generatedicons/generated"
import { BenefitCard } from "../../../components/global/benefitCard"
import { randomId } from "../../../helpers/random-id"

const BENEFITS = [
    {
        id: randomId(),
        text: "Remote/Hybrid work option",
        icon: <BriefCaseIcon />
    },
    {
        id: randomId(),
        text: "Sponsored and Tailored Training",
        icon: <YellowBookIcon />
    },
    {
        id: randomId(),
        text: "Health insurance",
        icon: <GreenHeartIcon />
    },
    {
        id: randomId(),
        text: "Paid annual leave",
        icon: <AirplaneIcon />
    },
]

export const CareerBenefits = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:h-[650px]">
            <section className="w-full h-full p-12 bg-primary-100 flex items-center justify-center">
                <section data-aos="fade-right" className=" w-full lg:w-4/5 flex flex-col items-center just gap-8 ">
                    <blockquote className="font-bold text-2xl text-[#FFE5F9] border-l-8 border-[#FFE5F9] px-4">
                        Klak is a centralized platform designed for African businesses to easily manage
                        cash flow and automate everyday financial operations.
                    </blockquote>

                    <p className="text-base text-[#F0F0F0]">
                        We're helping companies build finance operations and workflows that are
                        efficient so they make the best financial decisions.
                    </p>
                </section>
            </section>
            <section className="w-full h-full p-12 flex items-center justify-center">
                <section className="flex flex-col gap-4">
                    <header data-aos="fade-down">
                        <h2 className="font-extrabold text-[2.5rem] text-primary-200">Benefits</h2>
                        <p className="text-base">
                            Apart from a competitive salary, here are some perks
                            we offer our team members to set them up for success
                        </p>
                    </header>

                    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            BENEFITS.map((item) => (
                                <BenefitCard
                                    key={item.id}
                                    text={item.text}
                                    icon={item.icon}
                                />
                            ))
                        }
                    </section>
                </section>
            </section>
        </div>
    )
}