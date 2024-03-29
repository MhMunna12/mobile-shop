import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: ["comments"]
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      // providesTags: ['comments']
    }),
  }),
});
export const {
  useGetProductsQuery,
  useSingleProductsQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
