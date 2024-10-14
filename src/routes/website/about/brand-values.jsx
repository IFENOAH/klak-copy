import { BubbleIcon, DollarIcon, EarthIcon, TimerIcon, UserFillIcon } from "../../../assets/generatedicons/generated"
import { BrandValueCard } from "../../../components/global/brandCard"
import { randomId } from "../../../helpers/random-id"

const BRAND_VALUES = [
    {
        id: randomId(),
        value: "Efficiency",
        description: "We strive to help finance teams save time and resources by automating manual processes and improving workflow.",
        icon: <TimerIcon />
    },
    {
        id: randomId(),
        value: "Efficiency",
        description: "We strive to help finance teams save time and resources by automating manual processes and improving workflow.",
        icon: <DollarIcon />
    },
    {
        id: randomId(),
        value: "Efficiency",
        description: "We strive to help finance teams save time and resources by automating manual processes and improving workflow.",
        icon: <EarthIcon />
    },
    {
        id: randomId(),
        value: "Efficiency",
        description: "We strive to help finance teams save time and resources by automating manual processes and improving workflow.",
        icon: <BubbleIcon />
    },
    {
        id: randomId(),
        value: "Efficiency",
        description: "We strive to help finance teams save time and resources by automating manual processes and improving workflow.",
        icon: <UserFillIcon />
    },
]

export const BrandValues = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col gap-6 px-7 lg:px-28 max-w-screen-2xl">
            <p className="font-extrabold text-2xl md:text-5xl text-primary-200">
                Brand Values
            </p>

            <div className="w-full lg:w-4/5 flex items-center justify-center flex-wrap gap-4">
                {BRAND_VALUES.map((value, index) => (
                    <div key={index} className="w-full md:w-[48%] md:last:mx-auto">
                        <BrandValueCard
                            icon={value.icon}
                            value={value.value}
                            description={value.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}