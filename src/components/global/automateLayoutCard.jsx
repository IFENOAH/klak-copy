export const AutomateLayoutCard = ({ swap, image, heading, subheading, dataAos }) => {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6" data-aos={dataAos}>
            {
                swap ?
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={image}
                            loading="lazy"
                            alt="automation-figure"

                        />
                    </div>
                    :
                    null
            }
            <article className="w-full lg:w-1/2 flex flex-col gap-8">
                <h1 className="text-2xl md:text-4xl font-extrabold text-primary-200 w-full md:w-3/4 md:leading-[3rem]">
                    {heading}
                </h1>
                <p className='text-base md:text-xl'>
                    {subheading}
                </p>
            </article>

            {
                !swap ?
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={image}
                            loading="lazy"
                            alt="automation-figure"


                        />
                    </div>
                    :
                    null
            }
        </div>
    )
}