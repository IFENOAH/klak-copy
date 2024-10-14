import React, { useState } from 'react'
import { CountrySelectorDropdown, FlagImage } from 'react-international-phone'
import { Input } from '../input/input'

export const CustomPhoneInput = ({ enteredTel, telChangeHandler, telBlurHandler, telError, phone, setPhone }) => {

    const [country, setCountry] = useState('ng')
    const [show, setShow] = useState(false)

    const handleSelectCountry = (item) => {
        setCountry(() => item?.iso2)
        setPhone(() => item?.dialCode)
        setShow(prev => !prev)
    }

    const handleSelectDropdown = () => {
        setShow(prev => !prev);
    }

    return (
        <div className='flex items-end justify-center w-full'>
            <div onClick={handleSelectDropdown} className='relative cursor-pointer flex items-center justify-center space-x-2 py-[0.82rem] md:py-3 pl-3.5 pr-5 rounded-l-lg border-l border-y border-neutral-500'>
                <FlagImage iso2={country} size="20px" />
                <p className='text-xs'>+{phone}</p>
                <CountrySelectorDropdown
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        paddingTop: "10px"

                    }}
                    show={show}
                    selectedCountry={country}
                    onSelect={handleSelectCountry}
                    onClose={handleSelectDropdown}
                />
            </div>

            <Input
                wrapperClassName='w-full'
                name="phone"
                inputStyle="rounded-l-none focus:ring-0 focus:border-neutral-500"
                type="tel"
                placeholder={"Enter your phone number"}
                value={enteredTel}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
                // required
                error={telError}
            // errorText={telError ? "Enter a Valid Telephone Number" : null}
            />
        </div>
    )
}