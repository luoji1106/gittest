export default {

  addCount(state, oldProduct) {
    oldProduct.count += 1;
  },

  addCart(state, payload) {
    payload.count = 1;
    state.cartList.push(payload);
  }
}