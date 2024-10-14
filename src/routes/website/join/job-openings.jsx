import { JobCard } from "../../../components/global/jobCard"
import { randomId } from "../../../helpers/random-id"

const JOBS = [
    // {
    //     id: randomId(),
    //     role: "Sales Manager",
    //     location: "Lagos",
    //     type: "Full-Time",
    //     from: "remote"
    // },
    // {
    //     id: randomId(),
    //     role: "Sales Manager",
    //     location: "Lagos",
    //     type: "Full-Time",
    //     from: "remote"
    // },
    // {
    //     id: randomId(),
    //     role: "Sales Manager",
    //     location: "Lagos",
    //     type: "Full-Time",
    //     from: "remote"
    // },
    // {
    //     id: randomId(),
    //     role: "Sales Manager",
    //     location: "Lagos",
    //     type: "Full-Time",
    //     from: "remote"
    // },
]

export const JobOpenings = () => {
    return (
        <div className="w-full flex flex-col gap-8">
            <header className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-extrabold text-[3rem] text-primary-200">Job Openings</h1>
                <p className="textsm lg:text-base">Select from our available openings for your desired job</p>
            </header>

            {
                JOBS.length ?
                    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        {JOBS.map(job => (
                            <JobCard
                                key={job.id}
                                role={job.role}
                                location={job.location}
                                from={job.from}
                                type={job.type}
                            />
                        ))}
                    </section>
                    :
                    <div data-aos="zoom-in" className="w-full flex items-center justify-center">
                        <p className="text-base font-bold text-primary-200">
                            No Job openings at the moment
                        </p>
                    </div>
            }
        </div>
    )
}