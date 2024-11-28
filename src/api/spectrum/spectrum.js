import request from '@/pkg/request/request.js'

export function random(params) {
  return request({
    url: '/spectrum/random/get',
    method: 'get',
    params: params
  })
}
