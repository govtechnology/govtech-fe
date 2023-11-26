import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const certificateApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["certificateTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        getUserCertificate: builder.query({
          query: () => ({
            url: `/certificate`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
          providesTags: ["certificateTag"],
        }),
        getUserCertificateById: builder.query({
          query: ({ id }) => ({
            url: `/certificate/${id}`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
          providesTags: ["certificateTag"],
        }),
        requestUserCertificate: builder.mutation({
          query: ({ skType, skData }) => ({
            url: `/certificate/request`,
            method: "POST",
            body: { skType, skData },
            headers: getUserAuthHeaderApi(),
          }),
          invalidatesTags: ["certificateTag"],
        }),
        generateUserCertificate: builder.mutation({
          query: ({ skId, skType, skData }) => ({
            url: `/certificate/generate`,
            method: "POST",
            body: { skId, skType, skData },
            headers: getUserAuthHeaderApi(),
          }),
        }),
        getUserLinkCertificate: builder.mutation({
          query: ({ remotePath }) => ({
            url: "/certificate/download",
            method: "POST",
            body: { remotePath },
            headers: getUserAuthHeaderApi,
          }),
        }),
      };
    },
  });

export const {
  useGetUserCertificateQuery,
  useRequestUserCertificateMutation,
  useGetUserCertificateByIdQuery,
  useGenerateUserCertificateMutation,
  useGetUserLinkCertificateMutation,
} = certificateApi;
