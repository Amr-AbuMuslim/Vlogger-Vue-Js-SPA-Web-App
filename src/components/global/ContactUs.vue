<template>
  <div class="row" style="margin: 0px">
    <div class="col-md-6">
      <img
        src="@/assets/logo.png"
        alt=""
        style="width: 150px; margin-top: 40px"
      />
      <form ref="form" @submit.prevent="sendEmail">
        <h3>Keep In Touch</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          v-model="contactForm.name"
        />
        <input
          type="email"
          placeholder="Email to contact you "
          name="email"
          required
          v-model="contactForm.email"
        />
        <textarea
          type="text"
          name="message"
          rows="8"
          placeholder="Type Your Message Here ..."
          required
          v-model="contactForm.message"
        ></textarea
        ><input type="submit" value="Send a Message" @click="validate()" />
      </form>
      <div class="errors-list" v-show="errors.length > 0">
        <div class="error" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </div>
      <transition name="bounce">
        <div v-if="sent" class="thank-box" style="width: 50%; margin: 0 auto">
          <p
            class="thanks-message"
            style="font-size: 25px; font-family: cursive; font-weight: 600"
          >
            {{ statusMessage }}
          </p>
        </div></transition
      >
    </div>
    <div class="col-md-6">
      <img src="@/assets/Helping a partner-pana.png" alt="" />
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "contact-us",
  data: function () {
    return {
      contactForm: { name: "", email: "", message: "" },
      sent: false,
      statusMessage: "",
      errors: [],
    };
  },
  methods: {
    validate: function () {
      this.errors = []; // to begin with no errors
      if (!this.contactForm.name) this.errors.push("Name is Empty !");
      if (!this.contactForm.email) this.errors.push("Email is Empty !");
      if (!this.contactForm.message) this.errors.push("There is no Message !");
    },
    sendEmail: function () {
      emailjs
        .sendForm(
          "service_pxoacjw",
          "template_3gaejhr",
          this.$refs.form,
          "YGepdjg_klBdhoerk"
        )
        .then(
          () => {
            this.sent = true;
            this.statusMessage = "Message is Sent Successfuly";
            //alert("Success");
          },
          (error) => {
            this.sent = true;
            this.statusMessage = "Message is Faild To Sent , Try again Later !";
          }
        );
      this.contactForm.name = "";
      this.contactForm.email = "";
      this.contactForm.message = "";
     
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 25px;
  h3 {
    font-size: 40px;
    font-family: fantasy;
    letter-spacing: 7.2px;
    background-color: #333333;
    color: #fff;
    text-shadow: 4px 3px 2px #41b582;
    margin-bottom: 20px;
    padding: 20px;
  }
  input,
  textarea {
    padding: 5px;
    font-size: 18px;
    font-family: cursive;
    margin-bottom: 15px;
    border: none;
    outline: none;
    border-bottom: 2px solid black;
    word-break: break-all;
  }
  input:last-child {
    border: none;
    font-size: 20px;
    padding: 12px;
    font-weight: 800;
    transition: 0.3s;
  }
  input:last-child:hover {
    background-color: #333333;
    color: #fff;
  }
  input:last-child:focus {
    background-color: #41b883;
    color: #fff;
  }
}
.errors-list {
  background-color: #da1717d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  min-width: 200px; // for Mobiles
  border-radius: 12px;
  position: absolute;
  bottom: 100px;
  left: 100px;
  .error {
    padding: 12px;
    font-size: 19px;
    padding: 5px;
    font-family: cursive;
    color: #fff;
  }
}
img {
  width: 100%;
}

.thanks-message {
  background-color: #333333;
  color: #fff;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
}
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
</style>
