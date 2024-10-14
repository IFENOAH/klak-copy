import { Button } from "../../../../components/forms/button/button"
import { WhyKlak } from "../../home/why-klak"
import { Join } from "../../home/join"
import { AutoFeatureBenefits } from "./auto-benefits"
import { HowDoesAutoWork } from "./how-auto-works"
import { Connect } from "../../home/connect"
import KLakHero from "../../../../assets/images/receivableshero.png"
import HeroBg from "../../../../assets/images/testimonialbg.png"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export const ReceivablesAutomation = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            <Helmet>
                {/* Basic SEO */}
                <title>Accounts Receivable Automation | Klak</title>
                <meta name="description" content="Klak | Accounts Receivable Automation Solution To Scale Your Business" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Accounts Receivable Automation | Klak" />
                <meta property="og:description" content="Klak | Accounts Receivable Automation Solution To Scale Your Business" />
                <meta property="og:image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/collections-and-accounts-receivable-automation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accounts Receivable Automation | Klak" />
                <meta name="twitter:description" content="Klak | Accounts Receivable Automation Solution To Scale Your Business" />
                <meta name="twitter:image" content="/public/klak.png" />
            </Helmet>


            {/* main hero content here */}
            <main
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    objectFit: "contain",
                    width: "100%",
                    minHeight: "700px"
                }}
                className="w-full h-full flex items-center justify-start flex-col">
                {/* text and image section */}
                <section className="w-full flex items-center flex-col lg:flex-row px-7 lg:px-28 gap-6 lg:gap-12 py-12 lg:py-[8rem] relative max-w-screen-2xl">
                    <section data-aos="fade-right" className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 w-full">
                        <article className="w-full flex flex-col items-center lg:items-start justify-center gap-4">
                            <span className="text-secondary-400 uppercase text-xs">Let&apos;s transform your business</span>
                            <p className="text-3xl md:text-[3.5rem] font-bold text-center lg:text-left md:leading-[4.5rem] md:tracking-[-0.110rem] text-white w-full xl:w-8/12">
                                Make payment collection a breeze
                            </p>

                            <p className="w-full md:w-2/3 text-sm md:text-base font-medium text-white text-center lg:text-left">
                                Whether you're accepting up-front payment or issuing invoices for future payments, Klak makes your payment collection 5x faster.
                            </p>
                        </article>

                        <section className="gap-2 md:gap-6 ">
                            <Button
                                onClick={() => navigate("/book-a-demo")}
                                className="bg-white !text-primary-200">
                                Book a Demo
                            </Button>
                        </section>
                    </section>

                    {/* hero image section*/}
                    <section className="relative flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img data-aos="zoom-in-up" src={KLakHero} alt="KLak Hero" className="object-contain h-full w-full" />
                        </div>
                    </section>
                </section>
            </main>
            <section className="w-full flex items-center justify-center bg-white py-16 md:py-24">
                <AutoFeatureBenefits />
            </section>
            <section className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-secondary-500 to-[#FEE7F8] gap-24 md:gap-36 py-16 md:py-24">
                <HowDoesAutoWork />
                <Connect />
                <WhyKlak />
            </section>
            <section className="flex items-center justify-center w-full bg-white px-7 lg:px-28">
                <Join />
            </section>
        </div>
    )
}