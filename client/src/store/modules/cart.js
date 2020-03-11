//import axios from 'axios'; // in case we need user data/tokens along with the cart info

const state = {
    cart: [
        {
            id: 1,
            MealId: 1,
            price: 7.50,
            size: 'Small',
            quantity: 1,
            short_Description: "1 Beef Burger Over Spinach",
            ingredients: "these are some ingredients that need shome shit to tlak about in this thing that Wher ewwerie iting alwek icnd",
            image_name: "ChickenTinga.jpg"
        },

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
    addItem: (state, newItem) => (state.cart = state.cart.push(newItem)),

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