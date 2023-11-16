import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const certificateApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getUserCertificate: builder.query({
        query: () => ({
          url: `/certificate`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetUserCertificateQuery } = certificateApi;
