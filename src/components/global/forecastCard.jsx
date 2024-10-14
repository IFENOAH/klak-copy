export const ForeCastCard = ({ index, text }) => {
    return (
        <div data-aos="fade-up" className="flex items-center gap-4 border-l-2 border-primary-300 rounded-xl p-2">
            <span className="flex flex-2 items-center justify-center bg-primary-300 text-white w-10 h-10 rounded-full">{index}</span>
            <p className="flex flex-1 text-base text-wrap">{text}</p>
        </div>
    )
}