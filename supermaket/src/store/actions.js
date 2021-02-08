export default {
  collectCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 检查之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid == payload.iid);

      if(oldProduct) {
        context.commit('addCount', oldProduct);
        resolve('该商品加入购物车的数量+1');
      }else {
        context.commit('addCart', payload);
        resolve('该商品已添加至购物车');
      }
    })
  },
}