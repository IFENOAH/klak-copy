export const AutoForcastCard = ({ index, text }) => {
    return (
        <div data-aos="zoom-in-up" className="flex items-start flex-col gap-8 p-4 rounded-xl border-t-[3px] border-primary-500 bg-white shadow-lg">
            <div className="flex items-center gap-1 bg-gradient-to-b from-secondary-500 to-[#FEE7F8] py-2 px-4 rounded-md text-primary-100 font-extrabold">
                <span>Step</span>
                <span>{index}</span>
            </div>

            <p className="text-base font-medium">{text}</p>
        </div>
    )
}