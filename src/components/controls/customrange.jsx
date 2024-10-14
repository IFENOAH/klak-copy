import { useState } from "react";

export const CustomRangeSlider = ({ title, values, onValueChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMinus = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            onValueChange(values[currentIndex - 1]);
        }
    };

    const handlePlus = () => {
        if (currentIndex < values.length - 1) {
            setCurrentIndex(currentIndex + 1);
            onValueChange(values[currentIndex + 1]);
        }
    };

    const handleSliderChange = (e) => {
        const newIndex = parseInt(e.target.value, 10);
        setCurrentIndex(newIndex);
        onValueChange(values[newIndex]);
    };

    return (
        <div className="w-full flex flex-col items-start">
            <div className="value-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className='text-base font-normal'>{title} :</span> <span className='text-primary-200'>{" "}{values[currentIndex]}</span>
            </div>

            <div className="w-full flex items-center gap-4">
                <button type='button' className='border p-4 rounded-full w-3 h-3 flex items-center justify-center font-extrabold text-xl' onClick={handleMinus} disabled={currentIndex === 0}>
                    -
                </button>

                <input
                    type="range"
                    min="0"
                    max={values.length - 1}
                    value={currentIndex}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary-100"
                />

                <button type='button' className='border p-4 rounded-full w-3 h-3 flex items-center justify-center font-extrabold text-xl' onClick={handlePlus} disabled={currentIndex === values.length - 1}>
                    +
                </button>
            </div>
        </div>
    );
};
