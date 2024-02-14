<template>
  <header>
    <div
      class="container"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <div class="logo">
        <img src="@/assets/logo.png" alt="" /><span>lo<span>gg</span>er</span>
      </div>
      <div class="links">
        <i
          class="fa-solid fa-bars"
          v-if="windowWidth <= 700"
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
.fa-solid {
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
  margin-bottom: 20px;

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
    margin-bottom: 0px;
  }
  li {
    display: inline-block;
    font-size: 20px;
    padding: 2px;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-family: cursive;
    transition: 0.4s ease-in;
    margin-right: 20px;
  }
  a:hover {
    color: #41b883;
  }
  .router-link-active {
    color: #41b883;
  }
}
@media (max-width: 768px) {
  .fa-solid {
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
    // padding: 5px;
    border-radius: 6px;

    // width: 50%;
    // list-style: none;
    // padding: 5px;
    // text-align: left;
    // color: #fff;
    // font-size: 20px;
  }
  ul:before {
    content: "";
    position: absolute;
    /* width: 12px; */
    /* background-color: red; */
    /* height: 12px; */
    top: -38px;
    right: 20px;
    border-width: 14px;
    border-color: transparent transparent #fefefe transparent;
    border-style: solid;
    border-radius: 0px;
  }
  li {
    display: inline-block;
    margin: 0px;
    color: #fff;
    font-size: 20px;
    padding: 2px;
    width: 100%;
    a {
      font-size: 25px;
      margin: 15px;
    }
  }
}
</style>
