<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

  <footer>
    <div class="footer-row">
      <div class="footer-col-1">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
          <h3 class="footer-title">Vue Js Dev</h3>
          <p>Awesome Blog System Web Application with Vue Js</p>
          <div class="icons">
            <p>Follow US</p>
            <ul>
              <li>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
              </li>

              <li>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-col-2">
        <div class="blogs">
          <div class="blogs-icons">
            <h3 class="footer-title">Blogs</h3>
            <ul>
              <li>
                <i class="fa-solid fa-business-time"></i
                ><span>Business Blogs</span>
              </li>

              <li>
                <i class="fa-solid fa-scale-unbalanced-flip"></i
                ><span>Law Blogs</span>
              </li>
              <li>
                <i class="fa-solid fa-computer"></i>
                <span>Software Engineering Blogs</span>
              </li>
              <li>
                <i class="fa-solid fa-volleyball"></i><span>Sports Blogs</span>
              </li>
              <li>
                <i class="fa-solid fa-building-columns"></i>
                <span>Educational Blogs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="border-line"></div>
      <span
        >Made With Love By Amr Abu Muslim
        <i class="fa-brands fa-vuejs" style="color: #35495e"></i>
        Developer</span
      >
    </div>
  </footer>
</template>
<script>
export default {
  name: "BlogFooter",
};
</script>
<style lang="scss" scoped>
footer {
  height: 300px;

  width: 100%;
  .border-line {
    border: 2px solid #35495e;
    width: 30%;
    margin: 10px auto;
  }
  .footer-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    margin: 0px 20px;
  }

  .logo {
    img {
      width: 120px;
      height: 120px;
    }
    .footer-title {
      color: #35495e;
      font-family: fantasy;
      font-size: 35px;
    }
    p {
      font-size: 16px;
      font-family: "work sans";
    }
    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ul {
      list-style: none;
      padding: 0px;
      li {
        display: inline-block;
        padding: 10px;
        margin: 5px;
        font-size: 25px;
      }
      li a {
        color: #41b883;
        transition: 0.3s;
      }
      li a:hover {
        color: #03145f;
      }
      li:last-child a:hover {
        color: black;
      }
      li:nth-child(3) a:hover {
        color: red;
      }
    }
  }
  .blogs {
    padding: 15px;
    .footer-title {
      color: #35495e;
      font-family: fantasy;
      font-size: 45px;
      text-align: center;
    }
    .blogs-icons {
      ul {
        list-style: none;
        text-align: left;
        padding: 0px;
        li {
          padding: 10px;
          margin: 5px;
          font-size: 20px;
          display: flex;
          align-items: baseline;
        }
        span {
          margin-left: 8px;
          font-size: 20px;
        }
      }
    }
  }
  .copyright span {
    display: block;
    font-size: 20px;
    font-family: monospace;
    color: #35495e;
    padding: 15px;
  }
  @media (max-width: 768px) {
  }
}
</style>
