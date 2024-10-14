export const BrandValueCard = ({ icon, value, description }) => {
    return (
        <div data-aos="fade-up" className="border border-neutral-500 rounded-xl p-6 flex gap-4">
            <div>
                {!!icon && icon}
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-base">{description}</p>
            </div>
        </div>
    )
}