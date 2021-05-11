import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/dept/all', 'get', data)
export const deptDetail = data => createAPI('/dept/one', 'get', data)
export const deptDel = data => createAPI('/dept/delete/' + data.id, 'delete', data)
export const deptAdd = data => createAPI('/dept/add', 'post', data)
export const deptUpdate = data => createAPI('/dept/update', 'put', data)
export const addOrUpdate = data => {
  return data.id ? deptUpdate(data) : deptAdd(data)
}
