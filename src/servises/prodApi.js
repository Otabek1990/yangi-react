// src/services/taskApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const prodApi = createApi({
  reducerPath: "prodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Prod"],
  endpoints: (builder) => ({
    prod: builder.query({
      query: () => "/prod",
      providesTags: ["Prod"],
    }),

    addProd: builder.mutation({
      query: (prod) => ({
        url: "/prod",
        method: "POST",
        body: prod,
      }),
      invalidatesTags: ["Prod"],
    }),

    getProdItem: builder.query({
      query: (prodId) => ({
        url: `/prod/${prodId}`,
        method: "GET",
      }),
      providesTags: ["Prod"],
    }),

    updateProd: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/prod/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Prod"],
    }),
    deleteProd: builder.mutation({
      query: (id) => ({
        url: `/prod/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prod"],
    }),
  }),
});
export const {
  useProdQuery,
  useAddProdMutation,
  useUpdateProdMutation,
  useDeleteProdMutation,
  useGetProdItemQuery,
} = prodApi;
