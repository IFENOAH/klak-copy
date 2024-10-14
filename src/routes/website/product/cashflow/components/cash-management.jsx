import { ForeCastCard } from "../../../../../components/global/forecastCard"
import Image from "../../../../../assets/images/Asset.png"

const FLOW_DATA = [
    {
        text: `Authorize your bank account(s) connection to Klak`,
    },
    {
        text: `Authorize your Accounting Software/ERP connection to Klak`,
    },
    {
        text: `Switch through connected bank accounts to view your debit & credit transaction`,
    },
    {
        text: `Categorize each transaction with tags to easily track expense and revenue breakdown`,
    },
]

export const CashManagement = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row py-6">

            <div className="w-full flex items-center justify-center lg:w-1/2">
                <img
                    className="w-full h-full"
                    src={Image}
                    alt="how-it-works-figure"
                />
            </div>

            <section className="w-full flex items-start justify-center lg:w-1/2 flex-col gap-6">
                {
                    FLOW_DATA?.map((data, index) => (
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