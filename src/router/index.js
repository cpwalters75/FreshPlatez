import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      // table name is platez
      meals: [
        {
          prices: ["Small.....$7.50", "Large.....$12.00"], // hard code the Small...... and Large ....., get prices as price_small and price_large 
          qty: ["1", "2", "3", "4"],
          title: "1 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" //image name
        }
      ]
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    props: {
      meals: [
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "1 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "2 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "3 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }, {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "4 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "5 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        },
        {
          prices: ["Small.....$7.50", "Large.....$12.00"],
          qty: ["1", "2", "3", "4"],
          title: "6 Beef Burger Over Spinach",
          shortDescription:
            "A beef burger over spinach with pickled zucchini and sweet potatato fries",
          imageSrc: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        }
      ],
      newMeal:{
        prices: ["Small.....$7.50", "Large.....$12.00"],
        qty: ["1", "2", "3", "4"],
        title: "",
        shortDescription:
          "",
        imageSrc: ""

        // C/O https://placeholder.com/"
      }
    }
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
