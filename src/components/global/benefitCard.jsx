export const BenefitCard = ({ text, icon }) => {
    return (
        <div data-aos="fade-up" className="border border-neutral-500 px-4 py-8 rounded-xl flex flex-col items-center justify-center gap-4">
            {!!icon && icon}
            <p className="text-base font-bold">
                {text}
            </p>
        </div>
    )
}