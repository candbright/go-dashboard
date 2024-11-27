import request from "@/pkg/request/request.js";

export function random(num) {
  return request({
    url: '/spectrum/random/get',
    method: 'get',
    params: {
      num: num || 100
    }
  })
}
