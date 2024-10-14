import { useState } from "react"
import { Button } from "../../../components/forms/button/button"
import { Input } from "../../../components/forms/input/input"
import { Connect } from "../home/connect"
import { useForm } from "../../../hooks/useForm"
import { isValidTel } from "../../../utils/formvalidations"
import { CustomPhoneInput } from "../../../components/forms/phoneinput/customphoneinput"
import { handleError } from "../../../utils/handleError"
import { TextArea } from "../../../components/forms/textarea/textarea"
import { toast } from "sonner"
import HeroBg from '../../../assets/icons/herobg.svg'
import { Helmet } from "react-helmet"
import { useContactUsMutation } from "../../../services/apiSlice"

let isValid = false;

export const ContactUs = () => {

    const [details, setDetails] = useState({
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        message: null
    });
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

    const [contactUs, { isLoading }] = useContactUsMutation();

    const handleChange = (event) => {
        const value = event.target.value;
        setDetails({
            ...details,
            [event.target.name]: value
        })
    }

    const handleContactUs = async (event) => {
        event.preventDefault();
        try {
            const contactDetails = {
                firstName: details.firstname,
                lastName: details.lastname,
                email: details.email,
                phoneNo: Telephone,
                message: details.message
            }
            const res = await contactUs({ ...contactDetails }).unwrap();
            toast.success(res?.message)
        } catch (error) {
            const errorMessage = handleError(error);
            toast.error(errorMessage)
        }

        setDetails({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: ""
        })
        resetTel();
    }

    if (details.firstname && details?.lastname && details.email && details.message && enteredTel !== "") {
        isValid = true
    }

    return (
        <div className="w-full bg-white flex items-center justify-center flex-col">

            <Helmet>
                {/* Basic SEO */}
                <title>Contact-us | Klak</title>
                <meta name="description" content="Klak | Finance and Payment operations automation tool" />

                {/* Open Graph for Facebook, WhatsApp, etc. */}
                <meta property="og:title" content="Contact-us | Klak" />
                <meta property="og:description" content="Klak | Finance and Payment operations automation tool" />
                <meta property="og:image" itemprop="image" content="/public/klak.png" />
                <meta property="og:url" content="useklak.com/contact-us" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact-us | Klak" />
                <meta name="twitter:description" content="Klak | Finance and Payment operations automation tool" />
                <meta name="twitter:image" itemprop="image" content="/public/klak.png" />
            </Helmet>

            {/* main hero content here */}
            <main
                className="w-full lg:h-[550px] flex items-center justify-start flex-col">
                {/* text and form section */}
                <section className="w-full h-full flex items-start flex-col lg:flex-row gap-4 lg:gap-12 py-10 lg:py-[6rem] relative max-w-screen-2xl">
                    <section data-aos="fade-right" className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 w-full px-7 lg:pl-28 lg:w-6/12">
                        <article className="w-full flex flex-col items-start justify-center gap-4">
                            <div>
                                <p className="uppercase text-base font-bold">Contact us</p>
                            </div>
                            <p className="text-2xl lg:text-[2.5rem] font-bold text-left lg:text-left md:leading-[3.2rem] md:tracking-[-0.110rem] text-primary-100">
                                Connect with us anytime
                            </p>

                            <p className="w-full text-sm md:text-xl font-medium text-left lg:text-left">
                                Have questions about our platform or need assistance? We&apos;re here to help you every step of the way.
                                Reach out to us for support, inquiries, or anything else you need to manage your finances with ease.
                            </p>
                        </article>

                    </section>

                    <section
                        style={{
                            backgroundImage: `url(${HeroBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            objectFit: "contain",
                            // minHeight: "700px"
                        }}
                        className="w-full h-full lg:w-6/12 relative flex items-center justify-center px-7 lg:px-28">
                        <form data-aos="fade-left" onSubmit={handleContactUs} className="w-full bg-white rounded-xl p-4 shadow-lg flex flex-col gap-4">
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
                                    label="Email Address"
                                    placeholder="sammy@email.com"
                                    name="email"
                                    value={details.email}
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
                                <TextArea
                                    label="Enter Message"
                                    name="message"
                                    wrapperClassName="w-full"
                                    value={details.message}
                                    onChange={handleChange}
                                />
                            </section>

                            <Button
                                fullWidth
                                isLoading={isLoading}
                                disabled={isLoading || !isValid}
                            >
                                Send Message
                            </Button>
                        </form>
                    </section>
                </section>

            </main>
            <section className="flex items-center justify-center w-full bg-gradient-to-b from-secondary-500 to-[#FEE7F8] py-16 md:py-24">
                <Connect />
            </section>

        </div>
    )
}