import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../types';

export const userApi = createApi({
   reducerPath: "userApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:4500/api"
   }),
   endpoints: (builder) => ({
      getUserData: builder.query<IUser, string>({
         query: (id: string) => `profile/${id}`,
      }),
   })
});

export const {useGetUserDataQuery} = userApi