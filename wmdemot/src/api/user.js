import request from '@/utils/request'
// 例子 get传params post传data
// 用法：userList({...}).then(res=>{})
// 获取用户列表
export function userList (params) {
  return request({
    url: '/api/userlist',
    method: 'get',
    params
  })
}
// 检查用户名是否重复
export function checkUsername (data) {
  return request({
    url: '/api/checkUsername',
    method: 'post',
    data
  })
}
