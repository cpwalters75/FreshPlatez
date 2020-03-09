import axios from "axios";
import { Store } from "vuex";

//import axios from 'axios'; // in case we need user data/tokens along with the cart info

const state = {
    cart: [
    ]
};

const getters = {
    getItems: (state) => state.cart
};

const action = {
    addItem() {
        Store.commit('increment')

    }
};

const mutations = {

    increment(cart, n) {
        state.count += n

    }
};

export default {
    state,
    getters,
    actions,
    mutations
};