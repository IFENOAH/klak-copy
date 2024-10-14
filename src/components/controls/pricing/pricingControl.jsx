import { GreenCheckIcon, RedXicon } from "../../../assets/generatedicons/generated";
import { Button } from "../../forms/button/button"
import { motion } from "framer-motion";

const FEATURES = [
    "Cash management & forecast",
    "Automated Reconciliation",
    "Sync unlimited bank accounts",
    "Sync with accounting software/ERP",
    "Collection & Receivables Automation",
    "2-way sync with Accounting software/ERP"
];

const TiersMap = {
    klakOne: [false, false, false, false, true, true],
    klakTwo: [true, true, true, true, false, false],
    klakThree: [true, true, true, true, true, true]
};

const priceMap = {
    klakOne: "150,000",
    klakTwo: "90,000",
    klakThree: ""
}

export const PricingControl = ({ tier, type, annualprice, monthlyprice, recommended }) => {

    const tierSupport = TiersMap[tier] || [];
    const formatTierName = (tierName) => {
        const parts = tierName.split("klak");
        return `klak ${parts[1].toLowerCase()}`.trim();
    };

    const AnnualMarkUp =
        <div className="flex items-baseline">
            <sub className="text-xs md:text-sm font-black leading-none">N</sub>
            <motion.span className="text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold leading-none">{annualprice}</motion.span>
            <sub className="text-sm md:text-lg leading-none">/yr</sub>
        </div>

    const MonthlyMarkUp =
        <div className="flex items-baseline">
            <sub className="text-xs md:text-sm font-black leading-none">N</sub>
            <motion.span className="text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold leading-none">{monthlyprice}</motion.span>
            <sub className="text-sm md:text-lg leading-none">/month</sub>
        </div>

    const typeMap = {
        true: AnnualMarkUp,
        false: MonthlyMarkUp,
    }

    return (
        <div className="flex flex-col gap-3">
            <div className={`${recommended ? "border-none bg-secondary-500" : "border border-neutral-400"} p-4 rounded-xl flex flex-col items-center gap-4`}>
                <div className="flex items-center justify-center gap-3">
                    <p className="uppercase text-sm font-extrabold text-primary-200">{formatTierName(tier)}</p>
                    {recommended ? <p className="text-[10px] text-primary-200 bg-white font-bold border border-primary-200 px-2 py-1 rounded-lg">recommended</p> : null}
                </div>
                {typeMap[type]}

                <p className="px-3 py-1.5 text-xs font-extrabold bg-gradient-to-b from-secondary-500 to-[#FEE7F8] rounded-lg">Per User</p>

                <Button
                    fullWidth
                >
                    Start your Free trial
                </Button>
            </div>

            <div className="w-full border border-neutral-400 p-4 rounded-xl flex flex-col items-center gap-6">
                <p className="w-full text-sm font-extrabold text-primary-200 uppercase">Features</p>

                <section className="w-full">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="w-full flex items-center justify-start h-10 sm:h-12 border-b border-neutral-500 last:border-b-0"
                        >
                            {tierSupport[index] ? (
                                tier === 'klakThree' ? (
                                    <span className="w-full flex items-center justify-center"><GreenCheckIcon /></span> // Green check for "Klak Three" tier
                                ) : (
                                    <span className="text-xs sm:text-sm">{feature}</span> // Show feature text for supported features in other tiers
                                )
                            ) : (
                                <span className="w-full flex items-center justify-center font-bold">
                                    <RedXicon style={{ fontWeight: '800' }} />
                                </span> // Red "X" for unsupported features
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}