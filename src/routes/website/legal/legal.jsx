import { NavLink, Outlet } from "react-router-dom"
import '../../../index.css';
import { Helmet } from "react-helmet";

export const LegalAndCompliance = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col smooth-scroll">

            <Helmet>
                {/* Basic SEO */}
                <title>Legal | Klak</title>
                <meta name="description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Legal | Klak" />
                <meta property="og:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/legal" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Legal | Klak" />
                <meta name="twitter:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            <main className="w-full px-7 lg:px-28 max-w-screen-2xl py-9 flex flex-col gap-8">
                <h1 className="text-[#444648] font-extrabold text-[2rem] md:text-[3.5rem]">Legal and Compliance</h1>

                <section className="flex flex-col xl:flex-row gap-4 w-full">

                    <div className="w-full xl:w-1/5 border border-[#EAEAEA] rounded-xl p-4 flex flex-col gap-4 sticky top-14 lg:top-[4.5rem] xl:top-20 h-fit bg-white">
                        <h3>Topics</h3>

                        <ul className="flex flex-col gap-2.5">
                            <NavLink to="/legal/terms-of-use"
                                className="px-2"
                                end
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? '#6B0653' : '',
                                        textDecoration: 'none',
                                        fontWeight: isActive ? "800" : "400",
                                        borderLeft: isActive ? "3px solid #6B0653" : "",
                                    };
                                }}
                            >
                                Terms of Use
                            </NavLink>
                            <NavLink to="/legal/privacy-policy"
                                className="px-2"
                                end
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? '#6B0653' : '',
                                        textDecoration: 'none',
                                        fontWeight: isActive ? "800" : "400",
                                        borderLeft: isActive ? "3px solid #6B0653" : "",
                                    };
                                }}
                            >
                                Privacy Policy
                            </NavLink>
                            {/* <NavLink to="/legal/non-discriminatory-policy"
                                className="px-2"
                                end
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? '#6B0653' : '',
                                        textDecoration: 'none',
                                        fontWeight: isActive ? "800" : "400",
                                        borderLeft: isActive ? "3px solid #6B0653" : "",
                                    };
                                }}
                            >
                                Non-discrimination Policy
                            </NavLink> */}
                        </ul>
                    </div>

                    {/* main content here */}

                    <section className="w-full xl:w-4/5">
                        <Outlet />
                    </section>
                </section>
            </main>


        </div>
    )
}