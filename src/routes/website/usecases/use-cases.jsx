import { Button } from "../../../components/forms/button/button"
import { Connect } from "../home/connect"
import { Join } from "../home/join"
import { WhyKlak } from "../home/why-klak"
import { UseCaseTabs } from "./usecasetabs"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import HeroBg from "../../../assets/images/reconbg.png"
import ReconHero from "../../../assets/images/usecase.png"

export const UseCases = () => {

    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center flex-col w-full">

            <Helmet>
                {/* Basic SEO */}
                <title>Use-case</title>

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Use-case" />
                <meta property="og:image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/use-cases" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Use-case" />
                <meta name="twitter:image" content="/public/klak.png" />
            </Helmet>

            <section
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
                className="flex items-center justify-center gap-4 py-8 lg:py-[5rem]">

                <main className="w-full flex flex-col justify-between lg:items-center lg:flex-row px-7 lg:px-28 max-w-screen-2xl gap-8">
                    <article data-aos="fade-right" className="flex flex-col items-center lg:items-start justify-center gap-4 w-full lg:w-1/2">
                        <span className="text-sm text-[#CC0B9E] uppercase">Let&apos;s transform your business</span>
                        <p className="font-extrabold text-3xl md:text-5xl md:leading-[3.85rem] text-center lg:text-left text-primary-200">One central dashboard for all your finances</p>
                        <p className="text-base text-neutral-300 text-center lg:text-left w-full sm:w-2/3 ">
                            See all your inflows and outflows across all bank accounts and ERP on one single dashboard. Get smart insights and make decisions faster.
                        </p>
                        <Button
                            onClick={() => navigate("/book-a-demo")}
                        >
                            Book a Demo
                        </Button>
                    </article>

                    <img data-aos="zoom-in-up" className="" src={ReconHero} alt="hero-desc" />
                </main>
            </section>
            <section className="flex items-center justify-center w-full bg-white py-16 md:py-24">
                <UseCaseTabs />
            </section>
            <section className="flex items-center justify-center w-full bg-secondary-500 py-16 md:py-24">
                <Connect />
            </section>
            <section className="flex items-center justify-center w-full bg-[#FFE5F9] py-16 md:py-24">
                <WhyKlak />
            </section>
            <section className="flex items-center justify-center w-full bg-white px-7 lg:px-28">
                <Join />
            </section>
        </div >
    )
}