import { MissionCard } from "../../../components/global/missionCard"
import AboutImage from '../../../assets/images/about.png'

export const CoreValues = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-12 lg:gap-24 lg:pt-40 px-7 lg:px-28 max-w-screen-2xl">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <MissionCard
                    dataAos="fade-right"
                    mission="Our Mission"
                    details={`To help African businesses build resilience against the high probability of failure, 
                        and improve cash flow stability, profitability, and overall business growth.
                    `}
                />
                <MissionCard
                    dataAos="fade-left"
                    mission="Our Impact Vision"
                    node={
                        <div className="flex flex-col gap-4 text-base">
                            <p>To empower African businesses by:</p>

                            <ul className="flex flex-col list-disc gap-3 px-6">
                                <li>Enhancing efficiency, reducing costs, and improving accuracy in their financial operations</li>
                                <li>Promoting business growth through better financial insight, enabling informed decision-making and strategic planning</li>
                            </ul>
                        </div>
                    }
                />
            </section>
        </div>
    )
}