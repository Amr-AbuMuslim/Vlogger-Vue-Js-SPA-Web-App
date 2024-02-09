<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h1 class="post-title">{{ title }}</h1>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">
      {{ content }}
    </p>
    <div class="info">
      <span class="post-author">{{ author }}</span>

      <span class="post-category">{{ category }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  props: ["views", "title", "date", "content", "author", "category"],
};
</script>
<style lang="scss" scoped>
.post-box {
  margin: 25px;
  text-align: left;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ddd;
  position: relative;
  .post-views {
    position: absolute;
    font-weight: 800;
    top: 5px;
    right: 5px;
    background-color: #09635a;
    padding: 0 5px;
    text-align: center;
    border-radius: 6px;
    color: #ddd;
  }
  .post-title {
    font-weight: 800;
    letter-spacing: 3px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-date {
    font-weight: 700;
    font-size: 14px;
    color: #666;
  }
  .post-content {
    margin: 15px 0px;
    line-height: 1.5;
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
    color: #09635a;
  }
  .post-author {
    font-weight: 700;
    background-color: forestgreen;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
  }
  .post-category {
    font-weight: 700;
    background-color: rgb(6, 124, 108);
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
  }
  @media (max-width:768px) {
      .post-author {
    font-weight: 700;
    font-size: 13px;
    background-color: forestgreen;
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
  }
  .post-category {
    font-size: 13px;
    font-weight: 700;
    background-color: rgb(6, 124, 108);
    padding: 6px;
    border-radius: 6px;
    color: #fff;
    text-transform: capitalize;
  }
  }
}
</style>
