import { AUTOMATED_LISTS } from '../../../components/constants/automatedlists'
import { AutomateIcon, CashIcon, ReconCileIcon, WorkFlowIcon } from "../../../assets/generatedicons/generated";
import { StatementCard } from '../../../components/global/statementCard';
import '../../../index.css'

const iconMap = {
    "cashicon": <CashIcon />,
    "automateicon": <AutomateIcon />,
    "reconcileicon": <ReconCileIcon />,
    "workflowicon": <WorkFlowIcon />,
}

export const PositionalStatement = () => {

    return (
        <div className="w-full py-14 md:py-28 flex items-center flex-col gap-14">

            <header className="flex items-start justify-start flex-col gap-8 w-full px-7 lg:px-28 max-w-screen-2xl">
                <article className='w-full lg:w-3/4 flex items-start justify-start flex-col gap-8'>
                    <h1 className="font-extrabold text-3xl md:text-5xl text-primary-200">
                        Cut down on administrative burden, build a more efficient finance operation.
                    </h1>

                    <h4 className="text-lg md:text-xl font-medium">Klak automates your key finance operations,
                        gives you real time visibility and cuts down the time you spend on manual processes.
                    </h4>
                </article>
            </header>

            <section className="w-full enable-animation overflow-hidden">
                <div className="marquee">
                    <ul className="marquee__content flex items-center gap-6">
                        {AUTOMATED_LISTS?.map((item) => (
                            <StatementCard
                                key={item.id}
                                header={item.header}
                                subheading={item.subheading}
                                text={item.text}
                                icon={iconMap[item.icon]}
                            />
                        ))}
                    </ul>

                    {/* <ul aria-hidden="true" className="marquee__content flex items-center gap-6">
                        {AUTOMATED_LISTS?.map((item) => (
                            <StatementCard
                                key={item.id}
                                header={item.header}
                                subheading={item.subheading}
                                text={item.text}
                                icon={iconMap[item.icon]}
                            />
                        ))}
                    </ul> */}
                </div>
            </section>
        </div>
    )
}