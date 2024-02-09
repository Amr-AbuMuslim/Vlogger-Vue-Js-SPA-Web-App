<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <div class="blog-sidebar">
    <h1 class="title">Advertise here</h1>

    <div class="ads">
      <img :src="selectedPhoto.imageSrc" alt="img" />
    </div>

    <h3>{{ selectedPhoto.title }}</h3>
    <p>
      {{ selectedPhoto.content }}
    </p>
    <ul>
      <!-- bootsrab icons here and random image each time setinterval || FontAwesome -->
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
</template>
<script>
export default {
  name: "BlogSidebar",
  data: function () {
    return {
      images: [
        {
          imageSrc: "https://picsum.photos/id/13/367/267",
          title: "Subin",
          content:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo",
        },
        {
          imageSrc: "https://picsum.photos/id/28/367/267",
          title: "Overhold",
          content:
            "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibu",
        },
        {
          imageSrc: "https://picsum.photos/id/8/367/267",
          title: "Cardguard",
          content:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
        },
        {
          imageSrc: "https://picsum.photos/id/29/4000/2670",
          title: "Kanlam",
          content:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes",
        },
      ],
      selectedPhoto: null,
    };
  },
  // mounted(images) {
  //   //this.fetchImage(); // Fetch image initially
  //   this.selectedPhoto = this.randomAdd(this.images);
  //   setInterval(this.randomAdd(images), 180000);
  //   // const intervalId =  // 3 minutes in milliseconds
  //   //  this.$once('beforeDestroy', () => clearInterval(intervalId)); // Clear interval on component destroy
  // },
  methods: {
    randomAdd: function () {
      // console.log(this.selectedPhoto);
      // return this.selectedPhoto;
      return this.images[Math.floor(Math.random() * this.images.length)];
    },
  },
  created() {
    // initate first one
    this.selectedPhoto = this.randomAdd();

    //  show adds every 5 seconds
    setInterval(() => {
      this.selectedPhoto = this.randomAdd();
    }, 5000);
  },
  // watch: {
  //   randomAdd: function () {
  //     setInterval(() => {
  //      this.images[Math.floor(Math.random() * this.images.length)];
  //     }, 5);
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.ads {
  img {
    border-radius: 12px;
    width: 80%;
    margin: 12px;
  }
}
h3 {
  text-align: center;
  margin: 12px;
  text-transform: capitalize;
  font-family: fantasy;
}
p {
  font-size: 18px;
  line-height: 1.4;
  text-align: left;
  padding: 5px;
  margin: 5px;
  font-family: cursive;
  color: #0a0007;
}
.blog-sidebar {
  box-shadow: 0px 0px 5px #ddd;
  p {
    padding: 12px;
  }
}
h1 {
  font-weight: 556;
  font-family: fantasy;
  color: #bb1313d1;
  text-shadow: 0px 0px 6px black;
  cursor: pointer;
  padding: 10px;
}
ul {
  list-style: none;
  width: 100%;
  padding: 0px;
  li {
    display: inline-block;
    font-size: 35px;
    padding: 12px;
    margin: 5px;
    a {
      text-decoration: none;
    }
  }
  li:last-child a {
    color: black;
  }
  li:nth-child(3) a {
    color: red;
  }
}
</style>
