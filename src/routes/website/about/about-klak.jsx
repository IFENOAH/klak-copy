import { ArrowRight } from "react-feather"
import { Button } from "../../../components/forms/button/button"
import { CoreValues } from "./core-values"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { BrandValues } from "./brand-values"
import HeroBg from "../../../assets/images/pinkbg.png"
import AboutImage from '../../../assets/images/about.png'

export const AboutKlak = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            {/* SEO and Social Media Metadata */}
            <Helmet>
                {/* Basic SEO */}
                <title>About us | Klak</title>
                <meta name="description" content="Klak | Transforming African Businesses Through Cutting-Edge Finance Automation Solution" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="About us | Klak" />
                <meta property="og:description" content="Klak | Transforming African Businesses Through Cutting-Edge Finance Automation Solution" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/about-us" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About us | Klak" />
                <meta name="twitter:description" content="Klak | Transforming African Businesses Through Cutting-Edge Finance Automation Solution" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100% ',
                    objectFit: "contain",
                    width: "100%",
                }}
                className="w-full bg-transparent h-full flex items-center justify-start flex-col pt-[5rem] lg:py-[8.4rem] gap-16">
                {/* text and image section */}
                <section className="w-full flex items-center justify-center flex-col">
                    <section data-aos="fade-down" className="flex flex-col items-center justify-center px-7 lg:px-28 max-w-screen-2xl gap-4 lg:w-4/5">
                        <article className="w- full flex flex-col items-center justify-center gap-8">
                            <p className="text-3xl md:text-[3.5rem] font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200">
                                Built to help finance teams avoid chaos and become more efficient
                            </p>

                            <p className="md:px-12 text-base md:text-xl text-neutral-200 text-center">
                                We're on a mission to help African businesses build resilience against the high probability of failure, and improve cash flow stability, profitability, and overall business growth.
                            </p>
                        </article>

                        <section className="flex items-center justify-center">
                            <Button onClick={() => navigate("/careers")} className="!bg-primary-200">
                                See Openings
                            </Button>

                        </section>
                    </section>
                </section>

                <section data-aos="fade-up" className="flex items-center justify-center w-full lg:-mb-80 z-[1]">
                    <img
                        src={AboutImage}
                        alt="about-desc"
                    />
                </section>
            </main>

            <section className="w-full py-16 md:py-24 flex items-center justify-center">
                <CoreValues />
            </section>

            <section className="w-full py-16 md:py-24 flex items-center justify-center bg-secondary-500">
                <BrandValues />
            </section>

            <section className="w-full py-16 md:py-24 flex items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-4">
                    <p className="text-primary-200 text-3xl font-bold text-center">Want to be a part of our mission?</p>
                    <Button
                        onClick={() => navigate("/careers")}
                        className="!bg-primary-200">
                        Check Open Positions
                    </Button>
                </div>
            </section>
        </div>
    )
}