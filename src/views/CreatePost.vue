<template>
  <div class="create-post">
    <div class="container">
      <h2>What are you thinking about ?</h2>
      <div class="row">
        <div class="col-md-8">
          <post-structure />
        </div>
        <div class="col-md-4"><BlogSidebar /></div>
      </div>
    </div>
    <BlogFooter />
  </div>
</template>
<script>
import PostStructure from "@/components/BlogComponents/PostStructure.vue";
import BlogSidebar from "@/components/BlogComponents/BlogSidebar.vue";
import BlogFooter from "@/components/global/BlogFooter.vue";

export default {
  name: "Write-Blog",
  components: { PostStructure, BlogSidebar, BlogFooter },
};
</script>
<style lang="scss" scoped>
h2 {
  color: #fff;
  font-family: monospace;
  font-weight: 800;
  font-size: 57px;
  padding: 45px;
  text-shadow: 1px 5px 15px aquamarine;
  background-color: #333333;
  margin: 38px 0px;
  text-transform: capitalize;
  border-radius: 12px;
}
</style>
