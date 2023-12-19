import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["ibmfaTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        login: builder.mutation({
          query: ({ data }) => ({
            url: `/auth/signin`,
            method: "POST",
            body: {
              email: data.email,
              password: data.password,
            },
          }),
        }),
        logout: builder.mutation({
          query: () => ({
            url: '/auth/signout',
            method: 'POST',
            headers: getUserAuthHeaderApi()
          })
        }),
        create: builder.mutation({
          query: ({ data }) => ({
            url: `/auth/signup`,
            method: "POST",
            body: {
              name: data.name,
              email: data.email,
              password: data.password,
            },
          }),
        }),
        otpGenerate: builder.query({
          query: () => ({
            url: "/auth/otp/generate",
            method: "POST",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        otpVerify: builder.mutation({
          query: ({ token }) => ({
            url: "/auth/otp/verify",
            method: "POST",
            body: {
              token: token,
            },
            headers: getUserAuthHeaderApi(),
          }),
        }),
        otpValidate: builder.mutation({
          query: ({ userId, token }) => ({
            url: "/auth/otp/validate",
            method: "POST",
            body: {
              userId: userId,
              token: token,
            },
          }),
        }),
        otpDisable: builder.mutation({
          query: () => ({
            url: "/auth/otp/disable",
            method: "POST",
            headers: getUserAuthHeaderApi(),
          }),
        }),
      };
    },
  });

export const {
  useLoginMutation,
  useLogoutMutation,
  useCreateMutation,
  useOtpVerifyMutation,
  useOtpValidateMutation,
  useOtpGenerateQuery,
  useOtpDisableMutation,
} = authApi;
