<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="" /><span>lo<span>gg</span>er</span>
    </div>
    <div class="links">
      <i
        class="fa-solid fa-bars"
        v-if="windowWidth <= 400"
        @click="showMenu = !showMenu"
      ></i>
      <ul v-if="showMenu || windowWidth > 400">
        <li><router-link to="/"> Home </router-link></li>
        <li><router-link to="/write-blog"> Blogs </router-link></li>
        <li><router-link to="/blogs-page"> Post Blog </router-link></li>
        <li><router-link to="/about"> About </router-link></li>
        <li><router-link to="/help-page"> Help </router-link></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  data: function () {
    return { showMenu: false, windowWidth: window.innerWidth };
  },
  created() {
    this.windowWidth;
  },
};
</script>
<style lang="scss" scoped>
i {
  display: none;
}
header {
  display: flex;
  position: sticky;
  z-index: 9999;
  top: 0px;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px;

  background-color: rgb(53 73 94);
  .logo {
    color: #fff;

    margin: 0 15px;
    text-shadow: 2px 2px 12px #fff;
    img {
      width: 40px;
      height: 40px;
      vertical-align: bottom;
    }
    span {
      font-size: 25px;
      font-family: cursive;
    }
  }
}
.links {
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin: 0 20px;

      font-size: 20px;
      padding: 2px;
      a {
        text-decoration: none;
        color: #fff;
        font-family: cursive;
        transition: 0.4s ease-in;
      }
    }
  }
  a:hover {
    color: #41b883;
  }
  .router-link-active {
    color: #41b883;
  }
}
@media (max-width: 768px) {
  i {
    display: block;
    color: #fff;
    margin: 0 15px;
    font-size: 25px;
  }
  ul {
    position: absolute;
    top: 60px;
    left: 50%;
    background-color: #35495e;
    text-align: left;
    padding-left: 0px;
    margin: 12px;
    padding: 5px;
    border-radius: 6px;
    // width: 50%;
    // list-style: none;
    // padding: 5px;
    // text-align: left;
    // color: #fff;
    // font-size: 20px;
    li {
      display: inline-block;
      margin: 0px;
      color: #fff;
      font-size: 20px;
      padding: 2px;
      width: 100%;
      a {
        font-size: 25px;
        margin: 5px;
      }
    }
  }
}
</style>
