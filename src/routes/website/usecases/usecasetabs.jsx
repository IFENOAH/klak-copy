import { Tabs } from "../../../components/primitives/tabs"
import { IndustryCase } from "./industry"
import { RoleCase } from "./role"

const tabs = [
    {
        id: 0,
        title: "Industry Use Cases",
        component: <IndustryCase />
    },
    {
        id: 1,
        title: "Role Use Cases",
        component: <RoleCase />
    },
]

export const UseCaseTabs = () => {

    return (
        <div className="flex flex-col max-w-screen-2xl">
            <section className="">
                <Tabs tabs={tabs} />
            </section>
        </div>
    )
}