import {axiosRequest} from './request' 

export function getDetail(iid) {
  return axiosRequest({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export function getRecommend() {
  return axiosRequest({
    url: '/recommend'
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

export class ParamInfo {
  constructor(info, rule) {
    this.set = info.set,
    this.tables = rule.tables[0]
  }
}

export class Comment {
  constructor(list) {
    this.userName = list.user.uname,
    this.avatar = list.user.avatar,
    this.userImg = list.images,
    this.content = list.content,
    this.time = list.created,
    this.style = list.style
  }
}