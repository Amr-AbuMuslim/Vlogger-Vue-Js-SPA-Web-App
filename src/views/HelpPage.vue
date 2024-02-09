<template>
  <div class="help">
    <ContactUs />
    <div class="landing"></div>
    <BlogFooter />
  </div>
</template>

<script>
import ContactUs from "@/components/global/ContactUs.vue";
import BlogFooter from "@/components/global/BlogFooter.vue";

export default {
  name: "help-page",
  components: {
    ContactUs,
    BlogFooter,
  },
  data: function () {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
