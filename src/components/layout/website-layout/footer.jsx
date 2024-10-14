import { Link, useNavigate } from "react-router-dom"
import { FacebookIcon, InstagramIcon, LinkedinIcon, NavLogo, TwiterIcon } from "../../../assets/generatedicons/generated"

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#F4F4F4]">
            <main className="px-7 lg:px-28 max-w-screen-2xl pt-6 md:pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <section className="flex flex-col gap-6">
                    <Link to={"/"} className='flex'>
                        <NavLogo />
                    </Link>

                    <div className="flex flex-col">
                        <p className="text-neutral-100 text-base font-bold">Address:</p>
                        <p className="text-base text-neutral-300">No 16, Block B, Idowu Martins Street, Victoria Island, Lagos, Nigeria.</p>
                    </div>

                    <div className="grid grid-cols-4 gap-4 w-fit">
                        <InstagramIcon className="cursor-pointer" />
                        <TwiterIcon className="cursor-pointer" onClick={() => window.open("https://x.com/useklak")} />
                        <FacebookIcon className="cursor-pointer" />
                        <LinkedinIcon className="cursor-pointer" onClick={() => window.open("https://linkedin.com/company/useklak")} />
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <p className="text-base font-extrabold text-primary-100">Company</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/about-us" className="cursor-pointer text-base text-neutral-200">About us</Link>
                        <Link to="/contact-us" className="cursor-pointer text-base text-neutral-200">Contact us</Link>
                        <Link to="/careers" className="cursor-pointer text-base text-neutral-200">Careers</Link>
                        <Link to="/pricing" className="cursor-pointer text-base text-neutral-200">Pricing</Link>
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <p className="text-base font-extrabold text-primary-100">Product</p>

                    <div className="flex flex-col gap-4">
                        <p className="cursor-pointer text-base text-neutral-200 whitespace-nowrap">Workflow Automation</p>
                        <Link to="/automated-reconciliation" className="cursor-pointer text-base text-neutral-200 whitespace-nowrap">Automated Reconciliation</Link>
                        <Link to="/cashflow-management" className="cursor-pointer text-base text-neutral-200 whitespace-nowrap">Cash flow Management</Link>
                        <Link to="/collections-and-accounts-receivable-automation" className="cursor-pointer text-base text-neutral-200 whitespace-nowrap">Accounts Receivable Automation</Link>
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <p className="text-base font-extrabold text-primary-100">Use-case</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/use-cases" className="cursor-pointer text-base text-neutral-200">Industry</Link>
                        <Link to="/use-cases" className="cursor-pointer text-base text-neutral-200">Roles</Link>
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <p className="text-base font-extrabold text-primary-100">Resources</p>

                    <div className="flex flex-col gap-4">
                        <Link to="/blog" className="cursor-pointer text-base text-neutral-200">Blog</Link>
                        <Link to="/blog" className="cursor-pointer text-base text-neutral-200">Case Studies</Link>
                        <Link to="/blog" className="cursor-pointer text-base text-neutral-200">Knowledgebase</Link>
                    </div>
                </section>
            </main>

            <footer className="w-full px-7 lg:px-28 max-w-screen-2xl">
                <div className="w-full flex items-start flex-col gap-4 md:flex-row md:justify-between border-t border-neutral-400 py-3">
                    <div className="flex items-center gap-6">
                        <p className="cursor-pointer text-sm">Klak Technologies Limited©2024</p>
                        <span className="cursor-pointer text-sm">All Rights Reserved</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link to="/legal/privacy-policy" className="cursor-pointer text-sm">Privacy Policy</Link>
                        <Link to="/legal/terms-of-use" className="cursor-pointer text-sm">Terms Of Use</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}