import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const klakApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL
    }),
    endpoints: builder => ({
        bookADemo: builder.mutation({
            query: body => ({
                url: `/demo-requests/send-demo-request`,
                method: "post",
                body: { ...body }
            })
        }),
        contactUs: builder.mutation({
            query: body => ({
                url: `/enquiries/send-enquiry`,
                method: "post",
                body: { ...body }
            })
        }),
        getAQuote: builder.mutation({
            query: body => ({
                url: `/pricing-quotes/send-pricing-quote`,
                method: "post",
                body: { ...body }
            })
        })
    })
});

export const {
    useBookADemoMutation,
    useContactUsMutation,
    useGetAQuoteMutation,
} = klakApi