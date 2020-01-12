import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://nuxt-blog-7f47f.firebaseio.com/posts.json")
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return axios
          .post(
            "https://nuxt-blog-7f47f.firebaseio.com/posts.json",
            createdPost
          )
          .then(result => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: result.data.name
            });
          });
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          `https://nuxt-blog-7f47f.firebaseio.com/posts/${editedPost.id}.json`,
          editedPost
        )
        .then(vuexContext.commit('editPost', editedPost))
        .catch(console.log);
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
