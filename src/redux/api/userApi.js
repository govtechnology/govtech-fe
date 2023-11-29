import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const userApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getUser: builder.query({
        query: () => ({
          url: `/user`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetUserQuery } = userApi;
