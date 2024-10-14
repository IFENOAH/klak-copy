const propMap = {
    "circle": <span className="w-3 h-3 rounded-full border border-neutral-200 p-2" />,
    "inner": <span className="w-3 h-3 rounded-full border border-neutral-200 p-2 flex items-center justify-center">
        <span className="w-1.5 h-1.5 bg-black rounded-full p-1.5"></span>
    </span>,
    "dash": <span className="w-3 h-.5 border border-neutral-200"></span>,
}

export const GuideCard = ({ text, index, prop }) => {
    return (
        <div data-aos="zoom-out-up" className="flex items-start flex-col gap-4 p-4 rounded-xl bg-white shadow-lg">
            <header className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1 bg-gradient-to-b from-secondary-500 to-[#FEE7F8] py-2 px-4 rounded-md text-primary-100 font-extrabold">
                    <span>Step</span>
                    <span>{index}</span>
                </div>
                {propMap[prop]}
            </header>

            <p className="text-base font-medium">{text}</p>
        </div>
    )
}