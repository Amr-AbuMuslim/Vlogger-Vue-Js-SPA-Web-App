<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.png" /><span
          >lo<span style="color: #fff">gg</span>er</span
        >
      </div>
      <ul class="text-end">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/write-blog">Write-Blog</router-link></li>
        <li><router-link to="/blogs-page">Blogs</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/help-page">Help</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #333;
  overflow: hidden;

  .logo {
    user-select: none;
    span {
      font-family: "Protest Riot";
    }
    img {
      width: 50px;
      height: 50px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: 900;
    color: #41b883;
    text-shadow: 5px 1px 38px #3a5c4d;
    float: left;
    width: 200px;
    padding: 10px;
  }
  ul {
    width: calc(100% - 200px);
    margin: 0px;
    float: left;
    li {
      display: inline-block;
      padding: 20px;
      a {
        font-size: 22px;
        font-family: "Protest Riot";
        transition: 0.4s ease-in-out;
      }
      a:hover {
        color: #41b883;
      }
    }
  }

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  @media (max-width: 768px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: 900;
      color: #41b883;
      text-shadow: 5px 1px 38px #3a5c4d;
      float: left;
      width: 200px;
      padding: 10px;
      margin-top: 100px;
      transform: scale(1.5);
    }
  }
}
</style>
