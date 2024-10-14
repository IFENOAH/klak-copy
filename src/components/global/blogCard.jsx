import { DailySunIcon } from '../../assets/generatedicons/generated'

export const BlogCard = ({ time, sector, title, image }) => {
    return (
        <div className="w-full h-full flex flex-col gap-4 cursor-pointer rounded-[4px] overflow-hidden">
            <img
                className="bg-slate-100"
                src={image}
                alt="blog-item-figure"
                loading="lazy"
                style={{
                    backgroundSize: "100% 100%",
                    objectFit: "cover",
                    width: "100%",
                    height: "150px",
                    borderRadius: "3px",
                    // objectPosition: "top",
                }}
            />

            <section className='flex items-center gap-3'>
                <p className='text-sm font-medium'>{time}</p>
                <span className='p-0.5 rounded-full bg-neutral-200' />
                <p className='text-sm font-medium'>{sector}</p>
            </section>

            <p className='text-xl md:text-2xl font-extrabold'>{title}</p>

            <div className='flex items-center gap-2'>
                <DailySunIcon />
                <span className='text-base'>The Daily Sun</span>
            </div>
        </div>
    )
}