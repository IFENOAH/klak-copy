import { GuideCard } from "../../../../../components/global/guidecard"

const guideData = [
    { id: 1, text: "Go to your Klak Dashboard and click on Reconciliation" },
    { id: 2, text: "Then, click on Add Ledger" },
    { id: 3, text: "Click on the correct Ledger ID" },
    { id: 4, text: "Then, click on Add Corresponding Account" },
    { id: 5, text: "Check to be sure you selected the right ledger and bank account" },
    { id: 6, text: "Click on Run Reconciliation" }
];

const gridConfig = [
    { colSpan: 'col-span-1 md:col-span-5 md:pl-8 lg:pl-16', data: guideData[0], prop: "circle" },
    { colSpan: 'col-span-1 md:col-span-3', data: guideData[1], prop: "dash" },
    { colSpan: 'col-span-1 md:col-span-4 md:pr-8 lg:pr-16', data: guideData[2], prop: "dash" },
    { colSpan: 'col-span-1 md:col-span-4', data: guideData[3], prop: "dash" },
    { colSpan: 'col-span-1 md:col-span-5', data: guideData[4], prop: "dash" },
    { colSpan: 'col-span-1 md:col-span-3', data: guideData[5], prop: "inner" }
];

export const Guide = () => {
    return (
        <div className="w-full flex flex-col gap-16 px-7 lg:px-28 max-w-screen-2xl">
            <header className="flex items-center flex-col gap-4">
                <h1 className="font-extrabold text-3xl lg:text-5xl text-center">Step by Step guide</h1>
                <p className="text-base lg:text-xl text-neutral-100 text-center">To automate reconciliation on your Klak dashboard, follow these steps.</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full">
                {gridConfig.map((gridItem, index) => (
                    <section key={index} className={gridItem.colSpan}>
                        <GuideCard
                            key={index}
                            index={index + 1}
                            text={gridItem.data.text}
                            prop={gridItem.prop}
                        />
                    </section>
                ))}
            </section>

            <p className="w-full flex items-center justify-center mx-auto md:w-2/4 text-center font-normal text-base md:text-xl">
                Then Klak will complete the reconciliation and give you the report of your matched and unmatched transactions for your review
            </p>
        </div>
    )
}

4601649630