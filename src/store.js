import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
    posts: [],
  },

getters: {
    posts: state => {
        return state.posts;
    }
},
mutations: {
        SET_ITEMS (state, posts) {
            state.posts = posts
        }
},
actions: {
   async loadPosts ({ commit }) {
     try {
          const response = await axios.get('https://aix.salesfire.co.uk/api/searcha?client_id=3f32397c-21c6-47e5-9ebd-e9865ea03470');
          console.log(response.data.products)
          commit('SET_ITEMS', response.data.products)
       }
      catch (error) {
         console.log(error);
     }
   }
},
})