import { DailySunIcon } from "../../assets/generatedicons/generated"
import Blog2 from "../../assets/images/blog-2.jpg"

export const BlogBanner = () => {
    return (
        <div
            style={{
                background: `url(${Blog2})`,
                // backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                minHeight: "100%",
            }}
            className="w-full !h-[300px] flex flex-col gap-4 cursor-pointer rounded-[4px] overflow-hidden"
        >
            <div className="w-full h-full flex justify-end flex-col gap-4 p-6">
                <section className='flex items-center gap-3'>
                    <p className='text-sm font-medium text-white'>1 day ago</p>
                    <span className='p-0.5 rounded-full bg-white' />
                    <p className='text-sm font-medium text-white'>Finance</p>
                </section>

                <p className='text-xl md:text-2xl font-extrabold text-secondary-400'>Spend less time chasing payments</p>

                <div className='flex items-center gap-2'>
                    <DailySunIcon />
                    <span className='text-base text-white'>The Daily Sun</span>
                </div>
            </div>
        </div>
    )
}