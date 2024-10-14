import { CashFlowIcon, VisibilityIcon } from "../../assets/generatedicons/generated";
import { randomId } from "../../helpers/random-id";

export const NAVLINKS = [
    {
        id: randomId(),
        title: "Product",
        childrenTitle: "Products",
        children: [
            {
                title: "Cash flow Management and Forecast",
                subtitle: "Instant Visibility into your cash flow, make data backed decisions",
                icon: 'cashicon',
                link: "cashflow-management"
            },
            {
                title: "Collection & Receivables Automation",
                subtitle: "Streamline payment collection and invoicing, get paid 2x faster",
                icon: "automateicon",
                link: "collections-and-accounts-receivable-automation"
            },
            {
                title: "Automated Reconciliation",
                subtitle: "Instant visibility into your cash flow, make data backed decisions",
                icon: "reconcileicon",
                link: "automated-reconciliation"
            },
            // {
            //     title: "FMCG Accounts Receivables",
            //     subtitle: "Streamline payment collection and invoicing, get paid 2x faster ",
            //     icon: "workflowicon",
            //     link: ""
            // },
        ]
    },
    {
        id: randomId(),
        title: "Use Cases",
        link: 'use-cases'
    },
    {
        id: randomId(),
        title: "Resources",
        link: 'blog'
    },
    {
        id: randomId(),
        title: "Company",
        link: 'about-us'
    },
    {
        id: randomId(),
        title: "Pricing",
        link: 'pricing'
    }
]