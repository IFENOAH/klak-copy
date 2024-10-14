export const WhyChooseCard = ({ icon, heading, text, title, font }) => {
    return (
        <div data-aos="fade-up" className="flex items-start gap-4">
            <div>{!!icon && icon}</div>

            <div className="flex flex-col gap-3">
                <span className={`text-primary-200 ${title ? 'block' : 'hidden'} uppercase ${font ? font : "font-semibold text-xs"}`}>{title}</span>
                <h1 className="font-bold text-xl">{heading}</h1>
                <p className="text-[1.07rem] text-[#161C2D]">{text}</p>
            </div>
        </div>
    )
}