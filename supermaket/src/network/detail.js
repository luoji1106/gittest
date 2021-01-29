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

export class Shop {
  constructor(shopitem) {
    this.shopLogo = shopitem.shopLogo,
    this.shopName = shopitem.name,
    this.sales = shopitem.cSells,
    this.shopGoods = shopitem.cGoods,
    this.score = shopitem.score
  }
}