import { Button } from "../forms/button/button"
import { ArrowRight } from "react-feather"

const workMap = {
    "remote": "Remote",
    "onsite": "On-Site"
}

export const JobCard = ({ role, type, from, location }) => {
    return (
        <div data-aos="fade-up" className="w-full flex items-start justify-between border border-neutral-500 rounded-xl p-6">
            <section className="flex items-start flex-col gap-2">
                <p className="font-extrabold text-lg lg:text-2xl text-primary-200">{role}</p>

                <div className="flex items-center gap-2">
                    <p className="text-base whitespace-nowrap">{type}</p>
                    <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                    <p className="text-base">{workMap[from]}</p>
                    <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                    <p className="text-base">{location}</p>
                </div>
            </section>

            <Button
                variant="link"
                className="!text-[#4CAF50] !text-sm"
                rightIcon={<ArrowRight size={18} className="-rotate-45" />}
            >
                Apply Now
            </Button>
        </div>
    )
}