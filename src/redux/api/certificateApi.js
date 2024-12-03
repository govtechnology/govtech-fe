import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const certificateApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["certificateTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        getUserCertificate: builder.query({
          query: () => ({
            url: `/ngubalan/certificate`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        getUserCertificateById: builder.query({
          query: ({ id }) => ({
            url: `/ngubalan/certificate/${id}`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        requestUserCertificate: builder.mutation({
          query: ({ skType, skData }) => ({
            url: `/ngubalan/certificate/request`,
            method: "POST",
            body: { skType, skData },
            headers: getUserAuthHeaderApi(),
          }),
        }),
        generateUserCertificate: builder.mutation({
          query: ({ skId, skType, skData }) => ({
            url: `/ngubalan/certificate/generate`,
            method: "POST",
            body: { skId, skType, skData },
            headers: getUserAuthHeaderApi(),
          }),
        }),
        getUserLinkCertificate: builder.mutation({
          query: ({ remotePath }) => ({
            url: "/ngubalan/certificate/download",
            method: "POST",
            body: { remotePath },
            headers: getUserAuthHeaderApi(),
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
