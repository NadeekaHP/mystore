import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
        { invId: 1, name: 'Ladies Bag', image: '/assets/1.jpg', price: 999 },
        { invId: 2, name: 'Ladies Watch', image: '/assets/2.jpg', price: 1499 },
        { invId: 3, name: 'Ladies Shoes', image: '/assets/3.jpg', price: 499 },
        { invId: 4, name: 'Makeup', image: '/assets/4.jpg', price: 299 },
      ],
      inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
  },
});