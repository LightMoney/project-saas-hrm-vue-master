import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI('/company/list', 'get', data)
export const sassDetail = data => createAPI('/company', 'get', data)
