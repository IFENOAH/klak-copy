import { Button } from "../../../components/forms/button/button"
import { ArrowRight } from "react-feather"
import { Businesses } from "./business"
import { PositionalStatement } from "./positional-statement"
import { Automation } from "./automation"
import { Connect } from "./connect"
import { WhyKlak } from "./why-klak"
import { Testimonial } from "./testimonial"
import { KlakOnWeb } from "./klak-on-web"
import { Join } from "./join"
import { useNavigate } from "react-router-dom"
import { PostCardVariants, TextVariants } from "../../../helpers/cardanimation"
import KLakHero from "../../../assets/images/klak-hero.png"
import TestimonialBg from "../../../assets/images/testimonialbg.png"
import HeroBg from '../../../assets/icons/herobg.svg'
import '../../../index.css'

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white flex items-center justify-center">
            {/* main hero content here */}
            <main className="w-full bg-transparent h-full flex items-center justify-start flex-col pt-12 md:pt-[8.4rem]">
                {/* text and image section */}
                <section className="w-full flex items-center justify-center flex-col">
                    <section className="flex flex-col items-center justify-center px-7 lg:px-28 max-w-screen-2xl gap-4 lg:w-4/5">
                        <article className="w- full flex flex-col items-center justify-center gap-8">
                            <p
                                data-aos="fade-down"
                                className="text-3xl md:text-[3.5rem] font-bold text-center md:leading-[4.5rem] md:tracking-[-0.110rem]">
                                Manage all your <span className="text-primary-200 font-extrabold">financial</span> and <span className="text-primary-200 font-extrabold whitespace-nowrap">
                                    payment operations</span> in one place
                            </p>

                            <p data-aos="fade-up" className="md:px-12 text-base md:text-xl font-medium text-neutral-300 text-center">
                                From one platform, reconcile your finances, manage cash flow, automate your payment operations and make data backed decisions faster.
                            </p>
                        </article>

                        <section data-aos="fade-up" className="flex items-center justify-center gap-2 md:gap-6 ">
                            <Button
                                onClick={() => window.open("https://app.useklak.com/register?step=get-started", '_blank', 'noopener,noreferrer')}
                                rightIcon={<ArrowRight size={18} color="#FFFFFF" strokeWidth={3} />}
                            >
                                Get Started
                            </Button>

                            <Button
                                onClick={() => navigate("/book-a-demo")}
                                variant="default">
                                Book a Demo
                            </Button>

                        </section>
                    </section>
                    {/* hero image section*/}
                    <section
                        style={{
                            backgroundImage: `url(${HeroBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            objectFit: "contain",
                            width: "100%",
                            // minHeight: "700px"
                        }}
                        className="w-full flex items-center justify-center pt-8 md:pt-16">
                        <div className="w-full flex items-center justify-center px-7 lg:px-28">
                            <img
                                data-aos="fade-up"
                                src={KLakHero}
                            />
                        </div>
                    </section>
                </section>


                {/* Businesses content */}
                {/* <section className="w-full lg:w-4/6 flex items-center justify-center px-7 py-16 md:py-24">
                    <Businesses />
                </section> */}

                {/* statement content */}
                <section className="w-full bg-gradient-to-b from-secondary-500 to-[#FEE7F8]">
                    <PositionalStatement />
                </section>

                <section className="flex items-center justify-center w-full px-7 lg:px-28 max-w-screen-2xl py-16 md:py-24">
                    <Automation />
                </section>

                <section className="flex items-center justify-center w-full bg-secondary-500 py-16 md:py-24">
                    <Connect />
                </section>

                <section className="flex items-center justify-center w-full bg-[#FFE5F9] py-16 md:py-24">
                    <WhyKlak />
                </section>

                {/* <section
                    style={{
                        backgroundImage: `url(${TestimonialBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        objectFit: "contain",
                    }}
                    className="flex items-center justify-center w-full py-16 md:py-24 px-7"
                >
                    <Testimonial />
                </section> */}

                {/* <section className="w-full py-16 md:py-24 px-7 lg:px-28 max-w-screen-2xl">
                    <KlakOnWeb />
                </section> */}

                <section className="flex items-center justify-center w-full bg-gradient-to-b from-secondary-500 to-[#FEE7F8] px-7 lg:px-28">
                    <Join />
                </section>
            </main>

        </div>
    )
}