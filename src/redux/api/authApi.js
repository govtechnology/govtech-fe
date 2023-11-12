import { baseApi } from '../axiosBaseQuery';

export const authApi = baseApi.enhanceEndpoints({}).injectEndpoints({
    endpoints(builder) {
        return {
            login: builder.mutation({
                query: ({ data }) => ({
                    url: `/auth/signin`,
                    method: 'POST',
                    body: {
                        email: data.email,
                        password: data.password,
                    },
                }),
            }),
        };
    },
});

export const { useLoginMutation } = authApi;
