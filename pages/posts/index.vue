<template>
  <div class="posts-page">
    <PostList :is-admin="false" :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData() {
    return new Promise((res, rej) => {
      setTimeout(
        () =>
          res({
            posts: [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post",
                thumbnail: "https://i.ytimg.com/vi/wVmuQH_CsYg/hqdefault.jpg"
              }
            ]
          }),
        2000
      );
    });
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
