import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createUser(data: Table.CreateUserRequestData) {
  return request({
    url: "/user",
    method: "post",
    data
  })
}

/** 删 */
export function deleteUser(id: string) {
  return request({
    url: `/user/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateUser(data: Table.UpdateUserRequestData) {
  return request({
    url: "/user",
    method: "post",
    data
  })
}

/** 查 */
export function getTableDataApi(params: Table.GetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: "/admin",
    method: "get",
    params
  })
}
