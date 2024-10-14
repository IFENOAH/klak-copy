import { useRef, useState } from "react"
import { ChevronDown } from "react-feather"
import { motion } from "framer-motion";
import { PostCardVariants } from "../../../helpers/cardanimation";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";
import { useLocation } from "react-router-dom";
import { AutomateIcon, CashIcon, ReconCileIcon, WorkFlowIcon } from "../../../assets/generatedicons/generated";

export const NavItem = ({ title, children, childrenTitle, onClick, link }) => {

    const navItemRef = useRef();
    const location = useLocation();
    const [showChildren, setShowChildren] = useState(false);

    useOnOutsideClick(navItemRef, () => {
        setShowChildren(false)
    })

    const toggleChildrenView = () => {
        if (!children) {
            return;
        } else {
            setShowChildren(true)
        }
    }

    const navigateToRoute = (link) => {
        setShowChildren(false)
        onClick(link);
    }

    const iconMap = {
        "cashicon": <CashIcon className="w-6 h-6 md:w-12 md:h-12" />,
        "automateicon": <AutomateIcon className="w-6 h-6 md:w-12 md:h-12" />,
        "reconcileicon": <ReconCileIcon className="w-6 h-6 md:w-12 md:h-12" />,
        "workflowicon": <WorkFlowIcon className="w-6 h-6 md:w-12 md:h-12" />,
    }

    return (
        <div
            ref={navItemRef}
            onMouseEnter={toggleChildrenView}
            className="flex items-center gap-1.5 cursor-pointer relative">
            <span
                onClick={() => navigateToRoute(link)}
                className={`text-sm text-neutral-200 ${location.pathname.split("/")[1] === link ? "font-extrabold text-primary-200" : "font-normal"}`}>{title}</span>
            <div className={` ${children ? 'block' : 'hidden'} `} >
                <ChevronDown size={18} color="gray" />
            </div>

            {
                showChildren ?
                    <motion.section
                        variants={PostCardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full absolute top-0 xl:-left-24 lg:top-16 z-10 p-5 rounded-xl bg-gradient-to-b from-secondary-500 to-[#FEE7F8] 
                        flex flex-col gap-4 min-w-[280px] sm:min-w-[350px] md:min-w-[750px] xl:min-w-[950px]"
                    >
                        <p className="font-extrabold text-primary-200 text-base md:text-xl">{childrenTitle}</p>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                children?.map((item, index) => {
                                    console.log(item.icon)
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => navigateToRoute(item.link)}
                                            className="bg-white rounded-xl p-4 w-full cursor-pointer">
                                            <div className="flex items-start gap-4">
                                                <span className="">
                                                    {iconMap[item.icon]}
                                                </span>

                                                <div className="flex flex-col gap-3">
                                                    <h1 className="font-bold text-sm md:text-xl text-primary-200">{item.title}</h1>
                                                    <p className="flex text-xs md:text-base">{item.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </motion.section>
                    :
                    null
            }
        </div>
    )
}