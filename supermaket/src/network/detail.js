import {axiosRequest} from './request' 

export function getDetail(iid) {
  return axiosRequest({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title,
    this.price = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc,
    this.discountBgColor = itemInfo.discountBgColor,
    this.columns = columns,
    this.services = shopInfo.services
  }
}