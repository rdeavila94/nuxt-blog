<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      thumbnail="https://i.ytimg.com/vi/uz5w5KU2HJ0/maxresdefault.jpg"
      title="Hello There!"
      previewText="This is my first post"
      :is-admin="isAdmin"
    />
    <PostPreview
      id="2"
      thumbnail="https://i.ytimg.com/vi/uz5w5KU2HJ0/maxresdefault.jpg"
      title="Hello There - The second time!"
      previewText="This is my second post"
      :is-admin="isAdmin"
    />
    <PostPreview
      id="3"
      thumbnail="https://i.ytimg.com/vi/uz5w5KU2HJ0/maxresdefault.jpg"
      title="Hi There"
      previewText="This is my third post"
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  name: "PostList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
