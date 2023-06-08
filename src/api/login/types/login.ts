export interface LoginRequestData {
  /** admin 或 editor "admin" | "editor"*/
  username: string
  /** 密码 */
  password: string
}

export type LoginResponseData = ApiResponseData<{ token: string }>

export type LogOutResponseData = ApiResponseData<string>

export type UserInfoResponseData = ApiResponseData<{
  username: string
  roles: string[]
  nickname: string
  status: number
}>
