export default {
  collectCart(context, payload) {
    // 检查之前数组中是否有该商品
    const oldProduct = context.state.cartList.find(item => item.iid == payload.iid);

    if(oldProduct) {
      context.commit('addCount', oldProduct);
    }else {
      context.commit('addCart', payload);
    }
  },
}