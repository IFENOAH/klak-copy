import { useNavigate } from "react-router-dom"
import { AccessIcon, ClickupIcon, FirstBankIcon, FlutterwaveIcon, GtBankIcon, KeystoneIcon, OdooIcon, OracleIcon, PaystackIcon, QbIcon, SageIcon, SignatureIcon, StanbicIcon, SterlingIcon, WemaIcon, XeroIcon, ZenithIcon } from "../../../assets/generatedicons/generated"
import { Button } from "../../../components/forms/button/button"

const BANKS = [
    <KeystoneIcon />,
    <PaystackIcon />,
    <ZenithIcon />,
    <AccessIcon />,
    <SterlingIcon />,
    <GtBankIcon />,
    <FirstBankIcon />,
    <StanbicIcon />,
    <WemaIcon />,
    <SageIcon />,
    <XeroIcon />,
    <OracleIcon />,
    <QbIcon />,
    <FlutterwaveIcon />,
    <OdooIcon />,
]

export const Connect = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex items-center justify-center flex-col gap-12 px-7 lg:px-28 max-w-screen-2xl">
            <header className="flex items-center justify-center flex-col gap-4">
                <h1 className="text-2xl md:text-[2.5rem] font-extrabold text-primary-200 text-center w-full md:w-3/4 md:leading-[3.8rem]">
                    One Klak to manage them all
                </h1>
                <h4 className="text-sm md:text-base w-full md:w-3/5 text-center">
                    Connect your bank accounts, accounting software, ERP and other financial data sources to Klak, and manage your finance from a single source of truth
                </h4>
                <Button onClick={() => navigate("/book-a-demo")}>
                    Book a Demo
                </Button>
            </header>

            <section className="w-full md:w-4/6 flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {
                    BANKS?.map((bank, index) => (
                        <div key={index} className="shadow-xl rounded-full">
                            {bank}
                        </div>
                    ))
                }
            </section>
        </div>
    )
}