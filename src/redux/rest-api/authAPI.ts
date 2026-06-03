import { AccountLoginResponse, AccountLoginRequest } from "@/@types/AuthType";
import { baseAPI } from "./baseAPI";


export const authApi = baseAPI.injectEndpoints({
      endpoints:(builder)=>({
            
         accountLogin: builder.mutation< AccountLoginResponse, AccountLoginRequest >({
              query: (body) => ({
                 url: "/accountLogin",
                 method: "POST",
                 body,
               }),
         })
      })
})



export const { useAccountLoginMutation } = authApi;