<template>
  <div>
    <base-card :loading="loading" title="Register">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit()"
        >
          <v-text-field
            v-model="userName"
            name="userName"
            label="Username"
            type="text"
            counter="30"
            variant="underlined"
            :rules="nameRules"
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
            :rules="emailRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="phone"
            name="phone"
            label="Phone Number"
            type="phone"
            prefix="+55"
            variant="underlined"
            :rules="phoneRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            type="password"
            variant="underlined"
            :rules="passwordRules"
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="underlined"
            :rules="[matchingPasswords]"
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
        </v-form>
      </v-card-text>
    </base-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    loading: false,
    userName: "",
    nameRules: [
      (v) => !!v || "Username is required",
      (v) => v.length >= 4 || "Username must be at least 4 characters",
      (v) => v.length <= 30 || "Username must be less than 30 characters",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be at least 6 characters",
    ],
    phone: "",
    phoneRules: [
      (v) => !!v || "Phone Number is required",
      (v) =>
        (v && v.length <= 15) || "Phone Number must be less than 15 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) =>
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Email must be a valid email",
    ],
    confirmPassword: "",
  }),
  methods: {
    matchingPasswords() {
      if (this.password === this.confirmPassword) {
        return true;
      }

      return "Passwords do not match";
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      this.valid = this.$refs.form.validate().valid;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);

      console.log(this.userName + " logged in");
      this.$router.replace("/");
    },
  },
};
</script>
