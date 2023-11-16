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
        requestUserCertificate: builder.mutation({
          query: ({ skType, skData }) => ({
            url: `/certificate/request`,
            method: "POST",
            body: { skType, skData },
            headers: getUserAuthHeaderApi(),
          }),
          invalidatesTags: ["certificateTag"],
        }),
      };
    },
  });

export const { useGetUserCertificateQuery, useRequestUserCertificateMutation } =
  certificateApi;
