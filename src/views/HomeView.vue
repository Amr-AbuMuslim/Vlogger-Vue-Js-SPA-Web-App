<template>
  <div class="row" style="margin: 0px">
    <div class="col-md-9">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h3 class="popular-blogs-title">
          Most Popular Blogs <span>More Than <span>3K</span> views</span>
        </h3>
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
      <div class="pages">
        <input
          type="button"
          class="page"
          v-for="page in pages"
          :key="page"
          :value="page"
          @click="addPosts(posts, page)"
        />
      </div>
    </div>
    <div class="col-md-3"><BlogSidebar /></div>
    <BlogFooter />
  </div>
</template>

<script>
import BlogSidebar from "@/components/BlogComponents/BlogSidebar.vue";
import BlogPost from "@/components/BlogComponents/BlogPost.vue";
import JsonData from "../json/postsData.json";
import BlogFooter from "@/components/global/BlogFooter.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: { BlogPost, BlogSidebar, BlogFooter },
  data: function () {
    return {
      posts: JsonData,
      selects: [],
      mostViews: 3000,
      pages: [],
      currentPage: 1,
      postsPerPage: 3,
      filterdPosts: [],
    };
  },
  methods: {
    addPosts: function (posts, page) {
      this.selects = [];
      let startIndex = (page - 1) * this.postsPerPage;
      let lasttIndex = startIndex + this.postsPerPage;
      this.filterdPosts = posts.filter((post) => {
        return post.views > this.mostViews;
      });
      this.selects = this.filterdPosts.slice(startIndex, lasttIndex);
      // console.log(startIndex, lasttIndex);
      // console.log(this.selects);
      return this.selects;
    },
    addPageNumbers: function (filterdPosts, postsPerPage) {
      //posts / postsperpage math.ceil
      const totalNumberPages = Math.ceil(filterdPosts.length / postsPerPage);
      for (let i = 0; i < totalNumberPages; i++) {
        this.pages.push(i + 1);
      }
    },
  },
  created() {
    this.selects = this.addPosts(this.posts, this.currentPage);
    this.addPageNumbers(this.filterdPosts, this.postsPerPage);

    // console.log(this.selects);
  },
};
</script>
<style lang="scss" scoped>
.popular-blogs-title {
  border-radius: 3px;
  padding: 30px;
  background-color: #35495e;
  color: #fff;
  font-size: 40px;
  font-family: fantasy;
  width: fit-content;
  margin: 30px auto;
  span {
    color: #41b883;
    span {
      color: white;
    }
  }
}
.row {
  padding: 10px;
}
.pages {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  gap: 15px;
}
.page {
  padding: 5px 15px;
  font-weight: 800;
  background-color: #067c6c;
  border-radius: 2px;
  color: #fff;
  border: none;
}
input:focus {
  background-color: #e0dddd;
  color: #067c6c;
}
</style>
