<template>
  <div class="about">
    <div class="landing"></div>
  </div>
  <footer><blog-footer /></footer>
</template>

<script>
import BlogFooter from "@/components/global/BlogFooter.vue";
// @ is an alias to /src
export default {
  name: "AboutView",
  components: { BlogFooter },
};
</script>
<style lang="scss" scoped>
.landing {
  background-image: url(@/assets/snN3rbgKF7McfuiQAKcoLWMn.jpeg);
  height: calc(100vh - 80px);
  background-size: cover;
  background-position: -36px -170px;
}
</style>
