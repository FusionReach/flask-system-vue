import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 登录 */
export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "/token",
    method: "post",
    data
  })
}

export function logOutApi() {
  return request<Login.LogOutResponseData>({
    url: "/token",
    method: "delete"
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "/token",
    method: "get"
  })
}
