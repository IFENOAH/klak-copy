import { Button } from "../../../../components/forms/button/button"
import { FeatureBenefits } from "./benefits"
import { HowDoesItWork } from "./how-it-works"
import { WhyKlak } from "../../home/why-klak"
import { Join } from "../../home/join"
import ManageHeroBg from '../../../../assets/icons/manageHerobg.svg'
import KLakHero from "../../../../assets/images/cashflowcard.png"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export const CashFlowManagement = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            {/* SEO and Social Media Metadata */}
            <Helmet>
                {/* Basic SEO */}
                <title>Cash Flow Management | Klak</title>
                <meta name="description" content="Klak | Gain Complete Visibilty Into Cashflow" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Cash Flow Management | Klak" />
                <meta property="og:description" content="Klak | Gain Complete Visibilty Into Cashflow" />
                <meta property="og:image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/cashflow-management" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cash Flow Management | Klak" />
                <meta name="twitter:description" content="Klak | Gain Complete Visibilty Into Cashflow" />
                <meta name="twitter:image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main className="w-full bg-transparent h-full flex items-center justify-start flex-col py-12 lg:py-[8rem] max-w-screen-2xl">
                {/* text and image section */}
                <section className="w-full flex items-center flex-col lg:flex-row px-7 lg:px-28 gap-6 lg:gap-12 relative">
                    <section data-aos="fade-right" className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 w-full sm:w-2/3 lg:w-full">
                        <article className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="text-3xl md:text-[3.5rem] font-extrabold text-center lg:text-left md:leading-[4.5rem] md:tracking-[-0.110rem] text-primary-200">
                                A more efficient way to manage cash
                            </p>

                            <p className="text-sm md:text-base font-medium text-neutral-300 text-center lg:text-left">
                                With Klak, you have one view of how money moves, no more multiple screens.
                                Get updates of your cash-flow in real time, nothing escapes you. Make data backed decisions on the go.
                            </p>
                        </article>

                        <section className="flex items-center justify-center gap-2 md:gap-6 ">
                            <Button
                                onClick={() => navigate("/book-a-demo")}
                            >
                                Book a Demo
                            </Button>
                        </section>
                    </section>

                    {/* hero image section*/}
                    <section
                        style={{
                            backgroundImage: `url(${ManageHeroBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                        }}
                        className="relative flex items-center justify-centerp-8">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img data-aos="fade-left" src={KLakHero} alt="KLak Hero" className="object-contain" />
                        </div>
                    </section>
                </section>
            </main>

            <section className="w-full flex items-center justify-center bg-secondary-500 py-16 md:py-24">
                <FeatureBenefits />
            </section>

            <section className="w-full flex items-center justify-center py-16 md:py-24 px-7 lg:px-28">
                <HowDoesItWork />
            </section>
            <section className="flex items-center justify-center w-full bg-[#FFE5F9] py-16 md:py-24">
                <WhyKlak />
            </section>
            <section className="flex items-center justify-center w-full bg-white px-7 lg:px-28">
                <Join />
            </section>

        </div>
    )
}