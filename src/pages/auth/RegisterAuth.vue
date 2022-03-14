<template>
  <base-card :loading="loading" title="Register">
    <v-card-text>
      <form ref="form" @submit.prevent="submit()">
        <v-text-field
          v-model="userName"
          name="userName"
          label="Username"
          type="text"
          counter="30"
          variant="underlined"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          name="email"
          label="Email"
          counter="30"
          type="email"
          suffix="@example.com"
          variant="underlined"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          name="phone"
          label="Phone Number"
          type="phone"
          prefix="+55"
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

        <v-text-field
          v-model="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="underlined"
          required
        ></v-text-field>

        <v-btn type="submit" class="mt-4" color="primary" value="signUp"
          >Submit</v-btn
        >

        <router-link
          color="primary"
          class="pt-4 pb-2 d-flex justify-content-start"
          to="/login"
          >Already have an account?</router-link
        >
      </form>
    </v-card-text>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      loading: false,
      userName: "",
      password: "",
      phone: "",
      email: "",
      confirmPassword: "",
    };
  },
  methods: {
    reset() {
      this.valid = true;
      this.userName = "";
      this.password = "";
      this.phone = "";
      this.email = "";
      this.confirmPassword = "";
    },
    submit() {
      const { userName } = this;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);

      console.log(userName + " logged in");
    },
  },
};
</script>
