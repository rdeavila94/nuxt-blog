<template>
  <div class="posts-page">
    <PostList :is-admin="false" :posts="posts" />
  </div>
</template>

<script>

export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
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
