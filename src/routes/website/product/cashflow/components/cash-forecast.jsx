import { ForeCastCard } from "../../../../../components/global/forecastCard"
import Image from "../../../../../assets/images/Asset.png"

const FORCAST_DATA = [
    {
        text: `To get your forecasted 30-days cash position, you need to provide the following parameters; 
        budgeted expenses, expected income, and current liabilities for the next 30 days`,
    },
    {
        text: `Klak uses the above parameters with your current bank balance data spooled from the connected bank accounts to forecast your 30 days cash position`,
    },
    {
        text: `Easily modify the above parameters to achieve scenario planning for your cash forecast`,
    },
    {
        text: `Set up email-based and dashboard notifications to easily track the parameters that determines your forecasted cash position`,
    },
]

export const CashForecast = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row py-6">

            <div className="w-full flex items-center justify-center lg:w-1/2">
                <img
                    className="w-full h-full"
                    src={Image}
                    alt="how-it-works-figure"
                />
            </div>

            <section className="w-full lg:w-1/2 flex flex-col gap-6">
                {
                    FORCAST_DATA?.map((data, index) => (
                        <ForeCastCard
                            key={index}
                            text={data.text}
                            index={index + 1}
                        />
                    ))
                }
            </section>
        </div>
    )
}