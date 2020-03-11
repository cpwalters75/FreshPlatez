//import axios from 'axios'; // in case we need user data/tokens along with the cart info

const state = {
    cart: [
    ]
};

const getters = {
    getCartItems: (state) => state.cart
};

const actions = {
    removeCartItem: function ({ commit }, itemId) {
        commit('removeItem', itemId);
    },

    addCartItem: function ({ commit }, newItem) {
        commit('addItem', newItem);
    }
};

const mutations = {
    addItem: (state, newItem) => (state.cart.push(newItem)),

    removeItem: (state, itemId) => (
        state.cart = state.cart.filter(item => {
            return item.id != itemId;
        }
        ))
};


export default {
    state,
    getters,
    actions,
    mutations
};