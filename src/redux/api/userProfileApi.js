import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const userProfileApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["userProfileTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        getUserProfile: builder.query({
          query: () => ({
            url: `/profile`,
            method: "GET",
            headers: getUserAuthHeaderApi(),
          }),
          providesTags: ["userProfileTag"],
        }),
        updateUserProfile: builder.mutation({
          query: ({ data }) => ({
            url: `/profile`,
            method: "PATCH",
            body: {
              name: data.name,
              nik: data.nik,
              tempatLahir: data.tempatLahir,
              tanggalLahir: data.tanggalLahir,
              alamat: data.alamat,
            },
            headers: getUserAuthHeaderApi(),
          }),
          invalidatesTags: ["userProfileTag"],
        }),
      };
    },
  });

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  userProfileApi;
