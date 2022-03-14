<template>
  <base-card title="Forgot Password?" :loading="loading">
    <v-img
      src="https://i.pinimg.com/originals/97/88/21/9788210a1ff80515c91f0679eabb0e77.jpg"
      height="400px"
      cover
    ></v-img>

    <v-card-text>
      <form ref="form" @submit.prevent="submit()">
        <p class="text-center">
          Enter your email address and we will send you a link to reset your
          password.
        </p>
        <v-text-field
          v-model="email"
          class="mt-4"
          name="email"
          label="Email"
          type="email"
          variant="underlined"
          required
        ></v-text-field>

        <div class="row">
          <div class="col text-center">
            <v-btn
              type="submit"
              icon="mdi-send"
              class="mt-4"
              color="success"
              value="send"
              >Send</v-btn
            >
          </div>
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
      email: "",
      loading: false,
    };
  },
};
</script>
