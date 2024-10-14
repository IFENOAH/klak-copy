import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Tabs = ({ tabs, headerPadding }) => {

    const [activeTab, setActiveTab] = useState(0)

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className='z-10 space-y-4'>
            <div className={`z-[12] flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto w-full no-scrollbar bg-transparent ${headerPadding ? headerPadding : null} `}>
                {tabs?.map(item => (
                    <TabButton
                        key={item.id}
                        text={item.title}
                        active={item.id === activeTab}
                        onClick={() => handleTabClick(item.id)}
                        icon={item.icon}
                        rightIcon={item.rightIcon}
                    />
                ))
                }
            </div>
            <motion.div
                className='w-full h-full no-scrollbar p-1 min-h-20'>
                {tabs[activeTab]?.component}
            </motion.div>
        </div>
    )
}

export const TabButton = ({ text, onClick, active }) => {
    return (

        <div onClick={onClick}
            className={`
                ${active ? "font-extrabold border border-transparent bg-gradient-to-b from-secondary-500 to-[#FEE7F8]" : "text-base font-normal text-tblack-100 border border-neutral-500"}
                text-sm md:text-base text-tblack-100 cursor-pointer relative rounded-lg px-2 sm:px-4 py-2 sm:whitespace-nowrap
                flex items-center justify-center transition-all ease-linear duration-150
            `}
        >
            {text}
        </div>
    )
}