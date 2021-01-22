import {axiosRequest} from './request'

export function getHomeMultidata() {
  return axiosRequest({
    url: '/home/multidata'
  })
} 