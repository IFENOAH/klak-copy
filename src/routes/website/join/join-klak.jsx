import { Button } from "../../../components/forms/button/button"
import { CareerBenefits } from "./career-benefits"
import { Join } from "../home/join"
import { JobOpenings } from "./job-openings"
import { Helmet } from "react-helmet"
import HeroBg from "../../../assets/images/pinkbg.png"

export const JoinKlak = () => {
    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            <Helmet>
                {/* Basic SEO */}
                <title>Careers | Klak</title>
                <meta name="description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Careers | Klak" />
                <meta property="og:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/careers" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Careers | Klak" />
                <meta name="twitter:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    objectFit: "contain",
                    width: "100%",
                }}
                className="w-full h-full lg:min-h-[600px] flex items-center justify-center flex-col">
                {/* text and image section */}
                <section className="w-full flex items-center justify-center flex-col lg:flex-row px-7 lg:px-28 gap-6 lg:gap-12 py-12 lg:py-[8rem] relative max-w-screen-2xl">
                    <section data-aos="fade-up" className="flex flex-col items-center justify-center gap-4 w-full">
                        <article className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="text-3xl md:text-[3.5rem] font-bold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200 w-full">
                                Join us at Klak
                            </p>

                            <p className="w-full md:w-2/4 text-sm md:text-base font-medium text-center">
                                Be a part of Klak and help build finance tools that help companies make sense of their operations and grow
                            </p>
                        </article>

                        <section className="gap-2 md:gap-6 ">
                            <a href="#openings" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('openings').scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <Button>
                                    See Openings
                                </Button>
                            </a>
                        </section>
                    </section>
                </section>
            </main>

            <section className="w-full flex items-center justify-center">
                <CareerBenefits />
            </section>
            <section id="openings" className="flex items-center justify-center w-full bg-[#FBF9F0] px-7 lg:px-28 py-12 lg:py-[7rem] scroll-mt-6">
                <JobOpenings />
            </section>
            <section className="flex items-center justify-center w-full bg-white px-7 lg:px-28">
                <Join />
            </section>
        </div>
    )
}