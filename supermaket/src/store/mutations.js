export default {

  addCount(state, oldProduct) {
    oldProduct.count += 1;
  },

  addCart(state, payload) {
    payload.count = 1;
    payload.isCheck = true;
    state.cartList.push(payload);
  }
}