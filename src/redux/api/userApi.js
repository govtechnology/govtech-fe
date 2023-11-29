import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const userApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["userTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        getUser: builder.query({
          query: () => ({
            url: `/user`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        providesTags: ["userTag"],
      };
    },
  });

export const { useGetUserQuery } = userApi;
