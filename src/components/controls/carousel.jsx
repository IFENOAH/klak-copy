import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

export const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 5000 }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrevious = () => {
        setCurrentSlide((curr) => (curr === 0 ? slides?.length - 1 : curr - 1))
    }

    const goToNext = () => {
        setCurrentSlide((curr) => (curr === slides?.length - 1 ? 0 : curr + 1))
    }

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(goToNext, autoSlideInterval);
        return () => clearInterval(slideInterval)
    }, []);

    return (
        <div className="w-full relative overflow-hidden">
            <div
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
                className="w-full transition-transform ease-out duration-300 flex"
            >
                {slides?.map((slide, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                        {slide}
                    </div>
                ))}
            </div>

            {/* <div className={`absolute inset-0 flex items-center justify-between p-2 ${slides?.length <= 1 ? 'hidden' : 'flex'} `}>
                    <ChevronLeft onClick={goToPrevious} size={23} className="bg-white rounded-full p-1.5 cursor-pointer hover:bg-opacity-50 border border-tgray-xlight" />
                    <ChevronRight onClick={goToNext} size={23} className="bg-white rounded-full p-1.5 cursor-pointer hover:bg-opacity-50 border border-tgray-xlight" />
                </div> */}

            <div className={`${slides?.length <= 1 ? 'hidden' : 'flex'} items-center justify-center pt-10`}>
                <div className="flex items-center justify-center gap-1">
                    {
                        slides?.map((_, index) => (
                            <div
                                className={`transition-all duration-300 ease-in-out rounded-full ${currentSlide === index ? 'w-6 h-1 bg-[#FC0FC0]' : 'w-3 h-1 bg-white'}`}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
