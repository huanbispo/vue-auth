<template>
  <base-card :loading="loading" title="Login">
    <v-card-text>
      <form ref="form" @submit.prevent="submit()">
        <v-text-field
          v-model="userName"
          name="username"
          label="Username"
          type="text"
          variant="underlined"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          name="password"
          label="Password"
          type="password"
          variant="underlined"
          required
        ></v-text-field>

        <router-link
          class="pb-3 d-flex justify-content-start"
          to="/forgotPassword"
          >Forgot your password?</router-link
        >

        <div class="row">
          <v-btn type="submit" class="mt-4" color="primary" value="log in"
            >Submit</v-btn
          >

          <v-btn type="submit" class="mt-4 ml-4" value="register" to="/signUp"
            >Register</v-btn
          >
        </div>
      </form>
    </v-card-text>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      userName: "",
      password: "",
      confirmPassword: "",
      loading: false,
      goBack: false,
    };
  },
  methods: {
    reset() {
      this.valid = true;
      this.userName = "";
      this.password = "";
      this.confirmPassword = "";
    },
    submit() {
      this.loading = true;
      const { userName } = this;
      setTimeout(() => {
        this.loading = false;
        this.$router.replace("/validate");
      }, 3000);
      console.log(userName + " logged in");
    },
  },
};
</script>
