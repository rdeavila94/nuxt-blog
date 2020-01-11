import Vuex from "vuex";
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-7f47f.firebaseio.com/posts.json')
        .then(res => {
          const postsArray = [];
          for (const key in res.data) {
            postsArray.push({...res.data[key], id: key});
          }
          vuexContext.commit('setPosts', postsArray);
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      getPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
