import { Elevenlabs, FlatFile, Goody, Homebot, Mindsdb, Resend, Smartcar, Stedi, Teleport, Whop } from "../../../assets/generatedicons/generated";

const TRUSTED = [
    <Teleport />,
    <Homebot />,
    <Stedi />,
    <FlatFile />,
    <Elevenlabs />,
    <Mindsdb />,
    <Resend />,
    <Goody />,
    <Whop />,
    <Smartcar />,
]

export const Businesses = ({ pricing }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-12">
            {pricing ?
                <p className="text-xl text-center font-semibold text-primary-200">Join other businesses that use Klak to streamline their finance operations</p>
                :
                <p className="text-xl text-center">Join businesses who trust Klak</p>
            }

            <section className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                {
                    TRUSTED?.map((business, index) => (
                        <div key={index} className="">
                            {business}
                        </div>
                    ))
                }
            </section>
        </div>
    )
}