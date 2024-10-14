import { ColorRing } from 'react-loader-spinner'
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import classNames from "classnames";

export const Button = ({
    id,
    color,
    radius,
    tColor,
    icon,
    loadColor,
    isLoading,
    fullWidth = false,
    className,
    children,
    leftIcon,
    rightIcon,
    rounded = true,
    variant = "primary",
    onClick,
    disabled,
    form,
    type,
    ref,
    ...props
}) => {

    let isMonitor = useMediaQuery("(min-width: 2560px)");
    const colors = ["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"]

    const baseClass = (
        `md:text-base text-xs font-semibold cursor-pointer select-none [outline:none] disabled:bg-[#ccc] disabled:text-white disabled:cursor-not-allowed space-x-2
        ${variant === 'icon' ? 'p-1' : ' px-4 py-3 md:px-7 md:py-4'}
        ${fullWidth ? "w-full text-center flex items-center justify-center" : "w-fit flex items-center justify-between"}
        transition-all ease-in-out duration-300 gap-1`
    )
    const primaryClass = (` bg-primary-100 text-white hover:bg-opacity-80`)
    const defaultClass = (` bg-transparent border border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white`)
    const linkClass = (`bg-none text-primary-200 border-none`)
    const lightClass = (`bg-[#FBF9F0] text-primary-200 border-none`)
    const iconClass = (`p-0! ${color ? color : 'bg-none'} ${radius} ${tColor ? tColor : "black"} flex items-center justify-center space-y-0 space-x-0 m-0!`)

    const buttomMap = {
        "primary": primaryClass,
        "default": defaultClass,
        "link": linkClass,
        "light": lightClass,
        "icon": iconClass,
    }

    return (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            form={form}
            id={id}
            disabled={disabled}
            className={classNames(className, baseClass,
                rounded ? "rounded-lg" : "",
                buttomMap[variant]
            )}
            {...props}
        >
            {isLoading &&
                <ColorRing
                    colors={loadColor ?? colors}
                    ariaLabel="blocks-loading"
                    animationDuration="0.75"
                    width={isMonitor ? 40 : 20}
                    height={isMonitor ? 40 : 20}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />
            }
            {!!leftIcon && leftIcon}
            {children ? <span className="whitespace-nowrap">{children}</span> : null}
            {icon ? <span>{icon}</span> : null}
            {!!rightIcon && rightIcon}
        </button>
    );
}