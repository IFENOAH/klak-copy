import { useState } from "react"
import { PricingControl } from "../../../components/controls/pricing/pricingControl"
import { Button } from "../../../components/forms/button/button"
import { ToggleButton } from "../../../components/primitives/toggle";
import { Businesses } from "../home/business";
import { Connect } from "../home/connect";
import { WhyKlak } from "../home/why-klak";
import { Input } from "../../../components/forms/input/input";
import { DropDownSelect } from "../../../components/forms/dropdown/dropdown";
import { ACCOUNT_SOFTWARES, bankAccountCountRanges, COUNTRIES, CURRENT_SITUATION, KENYAN_TURNOVER_RANGES, NIGERIA_TURNOVER_RANGES } from "../../../components/constants/dropdownitems";
import { CustomRangeSlider } from "../../../components/controls/customrange";
import { CustomPhoneInput } from "../../../components/forms/phoneinput/customphoneinput";
import { useForm } from "../../../hooks/useForm";
import { isValidTel } from "../../../utils/formvalidations";
import { handleError } from "../../../utils/handleError";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetAQuoteMutation } from "../../../services/apiSlice";

export const Pricing = () => {

    const navigate = useNavigate();
    const [billingType, setBillingType] = useState(false);

    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        companyName: "",
        bankAccountsCount: 1,
        software: "",
        turnover: "",
        situation: "",
    });
    const [selectedCountry, setSelectedCountry] = useState("Nigeria");

    const {
        value: enteredTel,
        hasError: telError,
        isValid: telIsValid,
        valueChangeHandler: telChangeHandler,
        inputBlurHandler: telBlurHandler,
        reset: resetTel
    } = useForm(isValidTel)

    const [phone, setPhone] = useState('234');

    const [getAQuote, { isLoading }] = useGetAQuoteMutation();

    let isValid = false;
    const Telephone = `+${phone} ${enteredTel}`

    const handleChange = (event) => {
        const value = event.target.value;
        setDetails({
            ...details,
            [event.target.name]: value
        })
    }

    const handleCountrySelect = (option) => {
        setSelectedCountry(option)
    }

    const turnOverMap = {
        "Nigeria": NIGERIA_TURNOVER_RANGES,
        "Kenya": KENYAN_TURNOVER_RANGES
    }

    const handleValueChange = (value) => {
        setDetails({
            ...details,
            bankAccountsCount: value
        })
    };

    const handleSoftware = (option) => {
        setDetails({
            ...details,
            software: option.value
        })
    }

    const handleTurnover = (option) => {
        setDetails({
            ...details,
            turnover: option.value
        })
    }

    const handleSituation = (option) => {
        setDetails({
            ...details,
            situation: option.value
        })
    }

    const handleGetAQuote = async (event) => {
        event.preventDefault();
        try {
            const quoteDetails = {
                firstName: details.firstname,
                lastName: details.lastname,
                email: details.email,
                phoneNo: Telephone,
                companyName: details.companyName,
                country: selectedCountry?.value,
                accountSoftwareErp: details.software,
                numBankAccount: details.bankAccountsCount,
                annualTurnover: details.turnover,
                currentSituation: details.situation
            }
            const res = await getAQuote({ ...quoteDetails }).unwrap();
            toast.success(res?.message)

            setDetails({
                firstname: "",
                lastname: "",
                email: "",
                companyName: "",
                bankAccountsCount: 1,
                software: "",
                turnover: "",
                situation: "",
            })
            resetTel();

        } catch (error) {
            const errorMessage = handleError(error);
            toast.error(errorMessage)
        }
    }

    if (details.firstname &&
        details.lastname &&
        details.email &&
        enteredTel !== "" &&
        details.companyName &&
        selectedCountry?.value &&
        details.bankAccountsCount &&
        details.turnover &&
        details.situation) {
        isValid = true
    }

    return (
        <div className="w-full bg-white flex items-center justify-center ">

            <Helmet>
                {/* Basic SEO */}
                <title>Pricing | Klak</title>
                <meta name="description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Pricing | Klak" />
                <meta property="og:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/pricing" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pricing | Klak" />
                <meta name="twitter:description" content="Klak | Finance and Payment Operations Automation Platform For African Businesses" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main className="w-full bg-transparent h-full flex items-center justify-start flex-col pt-12 md:pt-[5rem] gap-8 bg-gradient-to-b from-secondary-500 to-[#FEE7F8]">

                <section data-aos="fade-up" className="w-full flex items-center justify-center flex-col">
                    <section className="flex flex-col items-center justify-center gap-4 lg:w-4/5">
                        <article className="w-full flex flex-col items-center justify-center">
                            <p className="text-2xl md:text-[3rem] font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-[#161C2D]">
                                An offer that fits your company
                            </p>
                            <p className="w-full md:w-2/3 md:px-12 text-base md:text-xl text-neutral-300 text-center">
                                Automate your financial operations with Africa&apos;s leading finance automation platform. Tell us a little bit about your company and discover your personalized offer.
                            </p>
                        </article>

                        <section className="flex items-center justify-center">
                            <Button
                                onClick={() => navigate("/book-a-demo")}
                                className="!bg-primary-100">
                                Get a free trial
                            </Button>

                        </section>
                    </section>
                </section>

                <form onSubmit={handleGetAQuote} className="w-full flex flex-col md:flex-row px-7 lg:px-28 max-w-screen-2xl py-10 lg:py-[5rem] gap-8">
                    <div data-aos="fade-right" className="w-full md:w-1/2">
                        <div className=" flex flex-col gap-4">
                            <CustomRangeSlider
                                title="Number of Bank Accounts"
                                values={bankAccountCountRanges}
                                onValueChange={handleValueChange}
                            />
                            <DropDownSelect
                                label="What Accounting Software or ERP do you use"
                                defaultValue="Select an option"
                                options={ACCOUNT_SOFTWARES}
                                onChange={handleSoftware}
                                required
                            />
                            <DropDownSelect
                                label="Country"
                                defaultValue="Nigeria"
                                options={COUNTRIES}
                                onChange={handleCountrySelect}
                                required
                            />
                            <DropDownSelect
                                label={`Annual Turnover (${selectedCountry?.value ?? "Nigeria"})`}
                                defaultValue="Select Range"
                                options={turnOverMap[selectedCountry?.value] ?? NIGERIA_TURNOVER_RANGES}
                                onChange={handleTurnover}
                                required
                            />
                            <DropDownSelect
                                label="What’s your current situation"
                                defaultValue="Select an option"
                                options={CURRENT_SITUATION}
                                onChange={handleSituation}
                                required
                            />
                        </div>
                    </div>

                    <div data-aos="fade-left" className="w-full md:w-1/2 bg-white rounded-xl p-4 shadow-lg flex flex-col gap-4 h-fit">
                        <section className="flex items-center gap-4">
                            <Input
                                wrapperClassName="w-full"
                                label="First Name"
                                placeholder="Enter first name"
                                name="firstname"
                                value={details.firstname}
                                onChange={handleChange}
                            />

                            <Input
                                wrapperClassName="w-full"
                                label="Last Name"
                                placeholder="Enter last name"
                                name="lastname"
                                value={details.lastname}
                                onChange={handleChange}
                            />
                        </section>

                        <section className="flex items-center gap-4">
                            <Input
                                wrapperClassName="w-full"
                                label="Work Email Address"
                                placeholder="sammy@email.com"
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                                required
                            />

                            <div className='flex items-start flex-col w-full'>
                                <label className="text-sm font-medium">Phone Number</label>
                                <CustomPhoneInput
                                    phone={phone}
                                    setPhone={setPhone}
                                    enteredTel={enteredTel}
                                    telBlurHandler={telBlurHandler}
                                    telChangeHandler={telChangeHandler}
                                    telError={telError}
                                />
                            </div>
                        </section>
                        <section className="w-full flex items-center gap-4">
                            <Input
                                wrapperClassName="w-full"
                                label="Company Name"
                                name="companyName"
                                placeholder="Enter company name"
                                value={details.companyName}
                                onChange={handleChange}
                                required
                            />
                        </section>
                        <Button
                            fullWidth
                            isLoading={isLoading}
                            disabled={!isValid || isLoading}
                        >
                            Get a Quote
                        </Button>
                    </div>
                </form>





                {/* text and image section */}
                {/* <section className="w-full flex items-center justify-center flex-col">
                    <section className="flex flex-col items-center justify-center gap-4 lg:w-4/5">
                        <article className="w-full flex flex-col items-center justify-center">
                            <p className="text-2xl md:text-[3rem] font-extrabold text-center md:leading-[4.5rem] md:tracking-[-0.110rem] text-[#161C2D]">
                                Fees as clear as glass
                            </p>
                            <p className="md:px-12 text-base md:text-xl text-neutral-300 text-center">
                                Pay for what you use, as you go. No extra charge, no hidden fees.
                            </p>
                        </article>

                        <section className="flex items-center justify-center">
                            <Button className="!bg-primary-100">
                                Get a free trial
                            </Button>

                        </section>
                    </section>
                </section> */}

                {/* <section className="w-full lg:w-10/12 flex items-center justify-center px-7 lg:px-28 max-w-screen-2xl">
                    <section className="w-full flex flex-col border border-neutral-500 rounded-xl p-2 sm:p-6 gap-3">
                        <header className="flex flex-col sm:items-center sm:flex-row justify-between gap-4">
                            <p className="font-bold text-base">Select your preferred plan</p>
                            <div className="flex items-center gap-2">
                                <span className="text-extrabold text-sm text-primary-200 font-extrabold">Billing Type:</span>
                                <div className="flex items-center gap-2">
                                    {billingType ?
                                        <span className="text-sm font-medium">Annually</span>
                                        :
                                        <span className="text-sm font-medium">Monthly</span>
                                    }
                                    <ToggleButton
                                        checked={billingType}
                                        onChange={(event) => setBillingType(event.target.checked)}
                                        size="w-6"
                                        translate="translate-x-2"
                                        padding="p-1"
                                    />
                                </div>
                            </div>
                        </header>

                        <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            <PricingControl monthlyprice={monthlyPriceMap["klakOne"]} annualprice={annualPriceMap["klakOne"]} type={billingType} tier="klakOne" />
                            <PricingControl monthlyprice={monthlyPriceMap["klakTwo"]} annualprice={annualPriceMap["klakTwo"]} type={billingType} tier="klakTwo" />
                            <PricingControl monthlyprice={monthlyPriceMap["klakThree"]} annualprice={annualPriceMap["klakThree"]} type={billingType} tier="klakThree" />
                        </section>

                        <section className="w-full md:w-2/3 flex items-center justify-center mx-auto">
                            <div className="flex items-center gap-2 bg-gradient-to-b from-secondary-500 to-[#FEE7F8] p-2 rounded-lg">
                                <p className="text-sm font-bold text-primary-200 whitespace-nowrap">Transaction Fees:</p>
                                <span className="text-xs sm:text-sm">Payment inflow (1% capped at NGN500)</span>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="w-full lg:w-4/6 flex items-center justify-center px-7 py-12">
                    <Businesses pricing />
                </section>
                <section className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-secondary-500 to-[#FEE7F8] gap-24 md:gap-36 py-16 md:py-24">
                    <Connect />
                    <WhyKlak />
                </section> */}
            </main>

        </div>
    )
}