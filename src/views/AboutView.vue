<template>
  <div class="about">
    <div class="landing">
    </div>
  </div>

  <blog-footer />
</template>

<script>
import BlogFooter from "@/components/global/BlogFooter.vue";
// @ is an alias to /src
export default {
  name: "AboutView",
  data: function () {
    return { clicked: false };
  },
  components: { BlogFooter },
};
</script>
<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.landing {
  background-image: url(@/assets/snN3rbgKF7McfuiQAKcoLWMn.jpeg);
  height: calc(100vh - 80px);
  background-size: cover;
  background-position: -36px -170px;
}
</style>
