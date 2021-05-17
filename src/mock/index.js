import Mock from 'mockjs'
import TableAPI from './table'
import ProfileAPI from './profile'
import LoginAPI from './login'
import CompanyAPI from './company'

Mock.setup({
  //timeout: '1000'
})
// 第一个参数拦截路径
Mock.mock(/\/table\/list\.*/, 'get', TableAPI.list)
// 登录的模拟数据
// Mock.mock(/\/frame\/profile/, 'post', ProfileAPI.profile)
// Mock.mock(/\/frame\/login/, 'post', LoginAPI.login)
// 模拟数据  企业
// Mock.mock(/\/company\/list/, 'get', CompanyAPI.list())
// Mock.mock(/\/company/, 'get', CompanyAPI.sassDetail())
