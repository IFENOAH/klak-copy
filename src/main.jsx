import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider, ScrollRestoration } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import App from './App.jsx'
import './index.css'
import 'react-international-phone/style.css';
import 'aos/dist/aos.css';

window.addEventListener("vite:preloadError", (event) => {
  window.location.reload();
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        lazy: async () => {
          let { Home } = await import(
            "./routes/website/home/home.jsx"
          );
          return { Component: Home };
        },
      },
      {
        path: "cashflow-management",
        lazy: async () => {
          let { CashFlowManagement } = await import(
            "./routes/website/product/cashflow/cashflow.jsx"
          );
          return { Component: CashFlowManagement };
        },
      },
      {
        path: "automated-reconciliation",
        lazy: async () => {
          let { AutomatedReconciliation } = await import(
            "./routes/website/product/reconciliation/reconciliation.jsx"
          );
          return { Component: AutomatedReconciliation };
        },
      },
      {
        path: "collections-and-accounts-receivable-automation",
        lazy: async () => {
          let { ReceivablesAutomation } = await import(
            "./routes/website/product/receivables-auto/receivables.jsx"
          );
          return { Component: ReceivablesAutomation };
        },
      },
      {
        path: "about-us",
        lazy: async () => {
          let { AboutKlak } = await import(
            "./routes/website/about/about-klak.jsx"
          );
          return { Component: AboutKlak };
        },
      },
      {
        path: "use-cases",
        lazy: async () => {
          let { UseCases } = await import(
            "./routes/website/usecases/use-cases.jsx"
          );
          return { Component: UseCases };
        },
      },
      {
        path: "blog",
        lazy: async () => {
          let { Resources } = await import(
            "./routes/website/resources/resources.jsx"
          );
          return { Component: Resources };
        },
      },
      {
        path: "pricing",
        lazy: async () => {
          let { Pricing } = await import(
            "./routes/website/pricing/pricing.jsx"
          );
          return { Component: Pricing };
        },
      },
      {
        path: "careers",
        lazy: async () => {
          let { JoinKlak } = await import(
            "./routes/website/join/join-klak.jsx"
          );
          return { Component: JoinKlak };
        },
      },
      {
        path: "book-a-demo",
        lazy: async () => {
          let { BookADemo } = await import(
            "./routes/website/demo/demo.jsx"
          );
          return { Component: BookADemo };
        },
      },
      {
        path: "contact-us",
        lazy: async () => {
          let { ContactUs } = await import(
            "./routes/website/contact/contact.jsx"
          );
          return { Component: ContactUs };
        },
      },
      {
        path: "legal",
        lazy: async () => {
          let { LegalAndCompliance } = await import(
            "./routes/website/legal/legal.jsx"
          );
          return { Component: LegalAndCompliance };
        },
        children: [
          {
            index: true,
            loader: () => redirect("terms-of-use"),
          },
          {
            path: "terms-of-use",
            lazy: async () => {
              let { TermsOfUse } = await import(
                "./routes/website/legal/terms-of-use.jsx"
              );
              return { Component: TermsOfUse };
            },
          },
          {
            path: "privacy-policy",
            lazy: async () => {
              let { PrivacyPolicy } = await import(
                "./routes/website/legal/privacy-policy.jsx"
              );
              return { Component: PrivacyPolicy };
            },
          }
        ]
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster richColors position="bottom-center" />
  </StrictMode>,
)
