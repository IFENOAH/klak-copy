import { useNavigate } from "react-router-dom"
import HeroBg from "../../../../assets/images/reconbg.png"
import ReconHero from "../../../../assets/images/reconhero.png"
import { Button } from "../../../../components/forms/button/button"
import { Connect } from "../../home/connect"
import { Join } from "../../home/join"
import { WhyKlak } from "../../home/why-klak"
import { CloseBooksFaster } from "./close-books-faster"
import { Guide } from "./guide/guide"
import { Helmet } from "react-helmet"

export const AutomatedReconciliation = () => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center flex-col gap-4 w-full">

            <Helmet>
                {/* Basic SEO */}
                <title>Automated Reconciliation</title>
                <meta name="description" content="Klak | Automated Reconciliation and Transaction Matching Solution To Scale Your Business" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Automated Reconciliation" />
                <meta property="og:description" content="Klak | Automated Reconciliation and Transaction Matching Solution To Scale Your Business" />
                <meta property="og:image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/automated-reconciliation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Automated Reconciliation" />
                <meta name="twitter:description" content="Klak | Automated Reconciliation and Transaction Matching Solution To Scale Your Business" />
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
                        <span className="text-sm text-primary-200 uppercase">Let&apos;s transform your business</span>
                        <p className="font-extrabold text-3xl md:text-5xl md:leading-[3.85rem] text-center lg:text-left">Close your books 5x faster with zero errors</p>
                        <p className="text-base text-neutral-300 text-center lg:text-left w-full sm:w-2/3 ">Spend less time bent over your workspace on manual reconciliation and data spreadsheets.
                            Automate it with Klak, reduce errors and focus on more important things.
                        </p>
                        <Button
                            onClick={() => navigate("/book-a-demo")}
                        >
                            Book a Demo
                        </Button>
                    </article>

                    <img data-aos="fade-left" className="" src={ReconHero} alt="hero-desc" />
                </main>
            </section>
            <section className="w-full flex items-center justify-center py-8">
                <CloseBooksFaster />
            </section>
            <section className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-secondary-500 to-[#FEE7F8] gap-24 md:gap-36 py-16 md:py-24">
                <Guide />
                <Connect />
                <WhyKlak />
            </section>
            <section className="flex items-center justify-center w-full bg-white px-7 lg:px-28">
                <Join />
            </section>
        </div>
    )
}