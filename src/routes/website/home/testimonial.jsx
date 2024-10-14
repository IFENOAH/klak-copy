import { Carousel } from "../../../components/controls/carousel"
import { TestimonialCard } from "../../../components/global/testimonialCard"

export const Testimonial = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-8 w-full">
            <h1 className="uppercase text-white text-sm font-bold">Testimonials</h1>

            <section className="flex items-center justify-center w-full md:w-1/2 lg:w-2/5">
                <Carousel autoSlide autoSlideInterval={5000}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Carousel>
            </section>
        </div>
    )
}
