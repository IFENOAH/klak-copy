import React, { useRef, useState } from 'react'
import * as Icon from 'react-feather'
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick'

export const DropDownSelect = ({ defaultValue, options, label, onChange, readOnly, node, styles, buttonStyles, search, searchChange, searchValue, isLoading, required }) => {

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState('')

    const ref = useRef()

    useOnOutsideClick(ref, () => {
        setShow(false);
    });

    const toggleDropDown = () => {
        setShow(prev => !prev)
    }

    const handleSelected = (option) => {
        onChange(option)
        setSelected(option)
    }

    return (
        <div tabIndex={0} className={`w-full min-w-[200px] space-y-1 ${styles}`}>
            {!!label ? (
                <label className="text-sm font-medium text-neutral-100 ">{label}</label>
            ) : null}
            {required && <span className='text-red-500'>*</span>}
            <button type='button' ref={ref} onClick={toggleDropDown} className={`w-full relative flex justify-between items-center focus:ring-primary-200 focus:border-primary-100
                gap-6 bg-white border border-neutral-500 focus:ring-opacity-20 focus:outline-none rounded-md focus:ring-4 cursor-pointer p-3 ${buttonStyles}`}
            >
                <section className='flex items-center  gap-2'>
                    {!!node && node}
                    <p className='text-neutral-200 text-sm whitespace-nowrap'>{selected ? selected?.value : defaultValue}</p>
                </section>
                {show ? <Icon.ChevronUp size={15} color='gray' /> : <Icon.ChevronDown size={15} color='gray' />}
                <div className={`absolute ${show ? "block" : "hidden"} left-0 right-0 top-full w-full max-w-full md:min-w-[200px] max-h-[250px] overflow-auto no-scrollbar bg-white shadow-md mt-1 rounded-lg z-20`}>
                    <ul className="overflow-y-auto max-h-[250px] text-left border border-neutral-500 ${!search ? 'rounded-lg' : 'rounded-b-lg'} no-scrollbar relative">
                        {options?.length ? options?.map(option => (
                            <MenuItem
                                key={option.id}
                                value={option?.value}
                                id={option?.id}
                                onSelect={() => handleSelected(option)}
                                readOnly={readOnly}
                            />
                        )) :
                            <li className='w-full overflow-hidden z-10 bg-twhite-100 px-4 py-3 hover:bg-primary-100 hover:text-white font-medium text-neutral-300 text-xs'>No options available</li>
                        }
                    </ul>
                </div>
            </button>
        </div>
    )
}

export const MenuItem = ({ onSelect, value, readOnly }) => {
    return (
        <li onClick={onSelect} className={`${readOnly && 'pointer-events-none'} w-full break-words overflow-hidden z-10 bg-white px-4 py-3 hover:bg-primary-100 hover:text-white border-b border-neutral-500 font-medium text-neutral-300 text-xs`}>
            {value}
        </li>
    )
}