import { Button } from "../../../components/forms/button/button"
import { Input } from "../../../components/forms/input/input"
import { DropDownSelect } from "../../../components/forms/dropdown/dropdown"
import { COMPANY_SIZES, COUNTRIES, KENYAN_TURNOVER_RANGES, NIGERIA_TURNOVER_RANGES } from "../../../components/constants/dropdownitems"
import { useState } from "react"
import { CustomPhoneInput } from "../../../components/forms/phoneinput/customphoneinput"
import { useForm } from "../../../hooks/useForm"
import { isValidTel } from "../../../utils/formvalidations"
import { handleError } from "../../../utils/handleError"
import { toast } from "sonner"
import HeroBg from '../../../assets/icons/herobg.svg'
import { Helmet } from "react-helmet"
import { useBookADemoMutation } from "../../../services/apiSlice"

const turnOverMap = {
    "Nigeria": NIGERIA_TURNOVER_RANGES,
    "Kenya": KENYAN_TURNOVER_RANGES
}

let isValid = false;

export const BookADemo = () => {

    const [details, setDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        companyName: "",
        industry: "",
        companySize: "",
        turnover: ""
    })
    const [selectedCountry, setSelectedCountry] = useState(null);

    const {
        value: enteredTel,
        hasError: telError,
        isValid: telIsValid,
        valueChangeHandler: telChangeHandler,
        inputBlurHandler: telBlurHandler,
        reset: resetTel
    } = useForm(isValidTel)

    const [phone, setPhone] = useState('234');
    const Telephone = `+${phone} ${enteredTel}`

    const [bookADemo, { isLoading }] = useBookADemoMutation();

    const handleChange = (event) => {
        const value = event.target.value;
        setDetails({
            ...details,
            [event.target.name]: value
        })
    }

    const handleCompanySize = (option) => {
        setDetails({
            ...details,
            companySize: option.value
        })
    }
    const handleTurnover = (option) => {
        setDetails({
            ...details,
            turnover: option.value
        })
    }

    const handleCountrySelect = (option) => {
        setSelectedCountry(option)
    }

    const handleBookADemo = async (event) => {
        event.preventDefault();
        try {
            const demoDetails = {
                firstName: details.firstname,
                lastName: details.lastname,
                email: details.email,
                phoneNo: Telephone,
                country: selectedCountry.value,
                industry: details.industry,
                companySize: details.companySize,
                annualTurnover: details.turnover
            }
            const res = await bookADemo({ ...demoDetails }).unwrap();
            toast.success(res?.message)
            window.open('https://calendly.com/useklak/30min', '_blank', 'noopener,noreferrer');

            setDetails({
                firstname: "",
                lastname: "",
                email: "",
                companyName: "",
                industry: "",
                companySize: "",
                turnover: ""
            })
            resetTel();

        } catch (error) {
            const errorMessage = handleError(error);
            toast.error(errorMessage)
        }
    }

    if (details.firstname && details.lastname && details.email &&
        details.companyName && details.industry && details.companySize && details.turnover && enteredTel !== "") {
        isValid = true
    }

    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            <Helmet>
                {/* Basic SEO */}
                <title>Book a Demo | Klak</title>
                <meta name="description" content="Klak | Flexible Pricing For Finance Automation Software" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Book a Demo | Klak" />
                <meta property="og:description" content="Klak | Flexible Pricing For Finance Automation Software" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/book-a-demo" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Legal | Klak" />
                <meta name="twitter:description" content="Klak | Flexible Pricing For Finance Automation Software" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main
                className="w-full flex items-center justify-start flex-col">
                {/* text and form section */}
                <section className="w-full h-full flex items-start flex-col lg:flex-row gap-4 lg:gap-12 py-10 lg:py-[6rem] relative max-w-screen-2xl">
                    <section data-aos="fade-right" className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 w-full px-7 lg:pl-28 lg:w-6/12">
                        <article className="w-full flex flex-col items-start justify-center gap-4">
                            <div>
                                <p className="uppercase text-base font-bold">Book a Demo</p>
                            </div>
                            <p className="text-2xl lg:text-[2.5rem] font-bold text-left lg:text-left md:leading-[3.2rem] md:tracking-[-0.110rem] text-primary-100">
                                Learn how Klak can streamline your finance and payment operations
                            </p>

                            <p className="w-full text-sm md:text-xl font-medium text-left lg:text-left">
                                From one platform, reconcile your finances, manage cash flow, automate your payment operations.
                                Get more accurate numbers and save up to 40+hours monthly with automation.
                            </p>
                        </article>

                    </section>

                    <section
                        style={{
                            backgroundImage: `url(${HeroBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            objectFit: "cover",
                        }}
                        className="w-full lg:w-6/12 relative flex items-center justify-center px-7 lg:px-28">
                        <form data-aos="fade-left" onSubmit={handleBookADemo} className="w-full bg-white rounded-xl p-4 shadow-lg flex flex-col gap-4">
                            <section className="flex flex-col md:flex-row items-center gap-4">
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

                            <section className="flex flex-col md:flex-row items-center gap-4">
                                <Input
                                    wrapperClassName="w-full"
                                    label="Email Address"
                                    placeholder="sammy@email.com"
                                    value={details.email}
                                    name="email"
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    value={details.companyName}
                                />
                            </section>
                            <section className="flex flex-col md:flex-rowitems-center gap-4">
                                <DropDownSelect
                                    label="Country"
                                    defaultValue="Nigeria"
                                    options={COUNTRIES}
                                    onChange={handleCountrySelect}
                                    required
                                />

                                <Input
                                    wrapperClassName="w-full"
                                    label="Industry"
                                    placeholder="FMCG"
                                    onChange={handleChange}
                                    value={details.industry}
                                    name="industry"
                                />
                            </section>
                            <section className="flex flex-col xl:flex-row items-center gap-4">
                                <DropDownSelect
                                    label="Company Size"
                                    defaultValue="Select an option"
                                    options={COMPANY_SIZES}
                                    onChange={handleCompanySize}
                                    required
                                />

                                <DropDownSelect
                                    label={`Annual Turnover (${selectedCountry?.value ?? "Nigeria"})`}
                                    defaultValue="Select Range"
                                    options={turnOverMap[selectedCountry?.value] ?? NIGERIA_TURNOVER_RANGES}
                                    required
                                    onChange={handleTurnover}
                                />
                            </section>

                            <Button
                                className="bg-primary-100"
                                fullWidth
                                isLoading={isLoading}
                                disabled={!isValid || isLoading}
                            >
                                Book a Demo
                            </Button>
                        </form>
                    </section>
                </section>

            </main>

        </div>
    )
}