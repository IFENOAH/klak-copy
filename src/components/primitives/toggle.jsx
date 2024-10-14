import React, { forwardRef } from 'react'

export const ToggleButton = forwardRef((props, ref) => {

    return (
        <label className='cursor-pointer'>
            <input
                type='checkbox'
                className='hidden'
                ref={ref}
                {...props}
            />
            <div className={`${props.size ?? 'w-14'} p-1 rounded-full ${props.checked ? "bg-green-500" : "bg-[#EAEAEA]"} `}>
                <div className={`w-fit ${props.padding ?? "p-2.5"} shadow-sm rounded-full transition-all duration-300 bg-white
                    ${props.checked ? ` ${props.translate ?? "translate-x-7"} rotate-0` : "-rotate-[360deg]"}`}
                ></div>
            </div>
        </label>
    )
})