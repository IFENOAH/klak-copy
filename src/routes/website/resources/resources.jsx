import { Helmet } from "react-helmet"
import HeroBg from "../../../assets/images/pinkbg.png"

export const Resources = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                objectFit: "contain",
                width: "100%",
            }}
            className="flex items-center justify-center py-[8.4rem]"
        >

            {/* SEO and Social Media Metadata */}
            <Helmet>
                {/* Basic SEO */}
                <title>Blog</title>
                <meta name="description" content="Klak Blog | Expert Insights On Finance Automation" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Blog" />
                <meta property="og:description" content="Klak Blog | Expert Insights On Finance Automation" />
                <meta property="og:image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog" />
                <meta name="twitter:description" content="Klak Blog | Expert Insights On Finance Automation" />
                <meta name="twitter:image" content="/public/klak.png" />
            </Helmet>
            <p data-aos="zoom-in-up" className="font-extrabold text-2xl md:text-5xl text-primary-200">
                Coming Soon...
            </p>
        </div>
    )
}