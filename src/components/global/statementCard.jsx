export const StatementCard = ({ header, subheading, text, icon }) => {
    return (
        <div className="min-h-96 max-h-96 w-[450px] bg-white rounded-xl px-8 py-6 flex flex-col gap-6">
            <section>
                {icon}
            </section>

            <article className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-[2rem] text-primary-200 font-extrabold">{header}</h1>
                <h3 className="font-bold text-base md:text-xl">{subheading}</h3>

                <p className="text-sm md:text-base font-medium">{text}</p>
            </article>
        </div>
    )
}