import { Avatar } from "../primitives/avatar"
import User from "../../assets/images/user.png"

export const TestimonialCard = ({ text, profile, name, role }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-8">
            <p className="text-xl md:text-[2rem] text-white font-bold w-full text-center md:leading-[3rem]">
                “Simply the best. Better than all the rest. I&apos;d recommend this product to beginners and advanced users.”
            </p>

            <section className="flex items-center flex-col gap-4">
                <Avatar src={User} size='lg' />
                <span className="text-base font-bold text-white">Ian Klein</span>
                <span className="text-sm text-white opacity-80">Digital Marketer</span>
            </section>
        </div>
    )
}