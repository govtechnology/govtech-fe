import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["ibmfaTag"] })
  .injectEndpoints({
    endpoints(builder) {
      return {
        login: builder.mutation({
          query: ({ data }) => ({
            url: `/ngubalan/auth/signin`,
            method: "POST",
            body: {
              email: data.email,
              password: data.password,
            },
          }),
        }),
        logout: builder.mutation({
          query: () => ({
            url: "/ngubalan/auth/signout",
            method: "POST",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        create: builder.mutation({
          query: ({ data }) => ({
            url: `/ngubalan/auth/signup`,
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
            url: "/ngubalan/auth/otp/generate",
            method: "POST",
            headers: getUserAuthHeaderApi(),
          }),
        }),
        otpVerify: builder.mutation({
          query: ({ token }) => ({
            url: "/ngubalan/auth/otp/verify",
            method: "POST",
            body: {
              token: token,
            },
            headers: getUserAuthHeaderApi(),
          }),
        }),
        otpValidate: builder.mutation({
          query: ({ userId, token }) => ({
            url: "/ngubalan/auth/otp/validate",
            method: "POST",
            body: {
              userId: userId,
              token: token,
            },
          }),
        }),
        otpDisable: builder.mutation({
          query: () => ({
            url: "/ngubalan/auth/otp/disable",
            method: "POST",
            headers: getUserAuthHeaderApi(),
          }),
        }),
      };
    },
  });

export const {
  useLoginMutation,
  useCreateMutation,
  useLogoutMutation,
  useOtpVerifyMutation,
  useOtpValidateMutation,
  useOtpGenerateQuery,
  useOtpDisableMutation,
} = authApi;
