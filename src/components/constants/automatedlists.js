import { randomId } from "../../helpers/random-id";

export const AUTOMATED_LISTS = [
    {
        id: randomId(),
        header: "Cash flow management",
        subheading: "Instant visibility into your cash flow, make data backed decisions",
        text: `Get real-time insight into cash flow & forecast cash position with accuracy.
        Consolidate your key financial data from sources like banks, accounting software, ERP to drive real-time business decisions for growth.`,
        icon: "cashicon"
    },
    {
        id: randomId(),
        header: "Collections and Receivables Automation",
        subheading: "Streamline payment collection and invoicing, get paid 2x faster",
        text: `Late payments and collections is hurting your cash flow. Put your cash and invoice collection on autopilot to boost cash flow.`,
        icon: "automateicon"
    },
    {
        id: randomId(),
        header: "Automated Reconciliation",
        subheading: "Close your books 5x faster with accuracy",
        text: `Improve data accuracy, cutdown time, and eliminate errors & headaches associated with manual reconciliation`,
        icon: "reconcileicon"
    },
    {
        id: randomId(),
        header: "Workflow Automation",
        subheading: "Boost payment operations efficiency and ditch repetitive tasks",
        text: `Automate key operations, lower operational costs and handle high volumes of transactions quickly without compromising on efficiency`,
        icon: "workflowicon"
    },
]