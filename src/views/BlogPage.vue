<template>
  <div class="blogs">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPost
              v-for="selected in selects"
              :key="selected.id"
              :title="selected.title"
              :views="selected.views"
              :content="selected.content"
              :date="selected.date"
              :author="selected.author"
              :category="selected.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar /> <button @click="addPosts(posts)">More Posts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer><BlogFooter /></footer>
</template>
<script>
import JsonData from "../json/postsData.json";
import BlogSidebar from "@/components/BlogComponents/BlogSidebar.vue";
import BlogPost from "@/components/BlogComponents/BlogPost.vue";
import BlogFooter from "@/components/global/BlogFooter.vue";

export default {
  data: function () {
    return {
      posts: JsonData,
      selects: [],
    };
  },
  name: "BlogPage",
  components: {
    BlogPost,
    BlogSidebar,
    BlogFooter,
  },
  methods: {
    // randomPost(posts) {
    //   return posts[Math.floor(Math.random() * posts.length)];
    // },
    addPosts(posts) {
      this.selects = [];
      for (let i = 0; i < 5; i++) {
        this.selects.push(posts[Math.floor(Math.random() * posts.length)]);
      }
      return this.selects;
    },
  },
  //
  created() {
    this.selects = this.addPosts(this.posts);
    console.log(this.selects.length);
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  position: relative;
}
button {
  // to do list in js function scroll up button
  position: absolute;
  right: calc(50% - (137px / 2));
  bottom: -100px;
  font-weight: 900;
  border: none;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 12px #8a8585;
  transition: 0.3s;
}
button:hover {
  background-color: rgb(28 56 84);
  color: #fff;
}
@media (max-width: 768px) {
  button {
    // to do list in js function scroll up button
    position: fixed;
    bottom: 10%;
    right: 20px;
    /* bottom: -100px; */
    font-weight: 900;
    border: none;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 12px #8a8585;
    transition: 0.3s;
  }
}
</style>
