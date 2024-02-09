<template>
  <div class="post-box">
    <input type="text" class="post-title" placeholder="Title" v-model="title" />
    <button
      class="add-post"
      @click.prevent="validate() | (postErrors.length == 0) ? addPost() : ''"
    >
      Add Post
    </button>
    <span class="post-date">Date :</span>
    <textarea
      rows="15"
      cols="30"
      class="post-content"
      placeholder="Write what you think about ... "
      style="font-size: 20px; padding: 10px 25px"
      v-model="content"
    ></textarea>
    <div class="info">
      <input
        type="text"
        class="post-author"
        placeholder="Author Name"
        v-model="author"
      />

      <input
        type="text"
        class="post-category"
        placeholder="Category"
        v-model="category"
      />
    </div>
  </div>
  <transition name="bounce"
    ><div class="error-list" v-show="postErrors.length > 0">
      <div class="errors" v-for="error in postErrors" :key="error">
        {{ error }}
      </div>
    </div></transition
  >
  <!-- using local storage to store data in and get it in the rendring  -->
  <div
    class="post-box"
    v-for="(post, index) in posts"
    :key="post.title"
    v-show="post.title"
  >
    <div class="post-top">
      <h1 class="post-title">{{ post.title }}</h1>
      <button class="delete-post" @click="deletePost(index)">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>

    <span class="post-date">{{ Date() }}</span>
    <p class="post-content">
      {{ post.content }}
    </p>
    <div class="info">
      <span class="post-author">{{ post.author }}</span>

      <span class="post-category">{{ post.category }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostStructure",
  data: function () {
    return {
      posts: [],
      title: "",
      content: "",
      author: "",
      category: "",
      postErrors: [],
      storedPosts: [],
    };
  },
  methods: {
    validate: function () {
      this.postErrors = [];
      if (!this.title) this.postErrors.push("Title is Empty");
      if (!this.content) this.postErrors.push("Content is Empty");
      if (!this.author) this.postErrors.push("Author is Empty");
      if (!this.category) this.postErrors.push("Category is Empty");
    },
    addPost: function () {
      {
        this.posts.push({
          title: this.title,
          content: this.content,
          author: this.author,
          category: this.category,
        });
      }
      localStorage.setItem("title", this.title);
      localStorage.setItem("content", this.content);
      localStorage.setItem("author", this.author);
      localStorage.setItem("category", this.category);
      (this.title = ""),
        (this.content = ""),
        (this.author = ""),
        (this.category = "");
    },
    deletePost: function (index) {
      this.posts.splice(index, 1);
      localStorage.removeItem("title");
      localStorage.removeItem("author");
      localStorage.removeItem("category");
      localStorage.removeItem("content");
    },
  },
  created() {
    {
      this.storedPosts.push({
        title: localStorage.getItem("title"),
        content: localStorage.getItem("content"),
        author: localStorage.getItem("category"),
        category: localStorage.getItem("category"),
      });
    }
    this.posts = this.storedPosts;
  },
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
.info,
.post-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form {
  input {
    width: 100%;
    display: block;
    padding: 20px;
    box-shadow: 1px 1px 12px #fff;
  }
}
.error-list {
  background-color: #fff8f8;
  padding: 20px;
  box-shadow: 0px 0px 12px #9e1515;
  text-align: center;
  font-size: 20px;
  color: rgba(255, 0, 0, 0.631372549);
  font-weight: 900;
  position: fixed;
  left: 40px;
  top: 321px;
}
.add-post {
  position: absolute;
  right: 30px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: #09635a;
  color: #fff;
  border-radius: 2px;
  border: none;
}
.delete-post {
  position: absolute;
  right: 7px;
  top: 10px;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  background-color: #ef1515;
  color: #fff;
  border-radius: 12px;
  border: none;
}
span.post-date {
  display: block;
  margin-top: 12px;
}
textarea {
  width: 100%;
}
input[type="text"].post-title {
  width: 50%;
  padding: 15px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
input[type="text"].post-author {
  color: #fff;
  outline: none;
  border: none;
  width: 30%;
  text-align: center;
  &::placeholder {
    color: #ffffff85;
  }
}
input[type="text"].post-category {
  color: #fff;
  text-align: center;
  outline: none;
  border: none;
  width: 30%;

  &::placeholder {
    color: #ffffff85;
  }
}
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
    word-break: break-all;
  }
  .post-date {
    font-weight: 700;
    font-size: 14px;
    color: #9c9c9cf8;
  }
  .post-content {
    margin: 15px 0px;
    line-height: 1.5;
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
    color: #09635a;
    word-break: break-all;
  }
  .post-author {
    font-weight: 700;
    background-color: rgb(51 51 51);
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
}
</style>
