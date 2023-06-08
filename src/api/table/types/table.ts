export interface CreateUserRequestData {
  username: string
  password: string
}

export interface UpdateUserRequestData {
  username?: string
  password?: string
}

export interface GetTableRequestData {
  /** 当前页码 */
  page: number
  /** 查询条数 */
  page_size: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：权限 */
  nickname?: string
}

export interface GetTableData {
  create_time: string
  roles: string[]
  status: number
  username: string
  nickname: string
}

export interface Meta {
  count: number
  page: number
  page_size: number
}

export type GetTableResponseData = ApiResponseData<{
  data: GetTableData[]
  meta: Meta
}>
