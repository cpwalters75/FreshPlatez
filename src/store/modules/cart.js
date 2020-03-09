//import axios from 'axios'; // in case we need user data/tokens along with the cart info

const state = {
    cart: [
        {
            id: 1,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "1 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        },
        {
            id: 2,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "2 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        },
        {
            id: 3,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "3 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        },
        {
            id: 4,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "4 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        },
        {
            id: 5,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "5 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        },
        {
            id: 6,
            price_small: "7.50",
            price_large: "12.00",
            qty_small: "3",
            qty_large: "1",
            title: "6 Beef Burger Over Spinach",
            shortDescription:
                "A beef burger over spinach with pickled zucchini and sweet potatato fries",
            image_name: "ChickenTinga.jpg"
        }
    ]
};

const getters = {
    getItems: (state) => state.cart
};

const actions = {

};

const mutations = {
    addItemtoCart: (state, item) => (state.cart.push(item))
};

export default {
    state,
    getters,
    actions,
    mutations
};