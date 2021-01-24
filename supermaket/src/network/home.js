import {axiosRequest} from './request'

export function getHomeMultidata() {
  return axiosRequest({
    url: '/home/multidata'
  })
} 

export function getHomeGoods(type, page) {
  return axiosRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}