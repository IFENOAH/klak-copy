export const MissionCard = ({ mission, details, node, dataAos }) => {
    return (
        <div data-aos={dataAos} className="w-full border border-neutral-500 rounded-xl py-4 px-6 flex flex-col gap-4 group hover:border-transparent hover:bg-gradient-to-b from-secondary-500 to-[#FEE7F8]">
            <h1 className="text-2xl font-extrabold group-hover:text-primary-200">{mission}</h1>
            <p className="text-base">{details}</p>
            {!!node && node}
        </div>
    )
}