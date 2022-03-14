<template>
  <base-card title="Verification" :loading="loading">
    <v-img
      src="https://i.pinimg.com/originals/97/88/21/9788210a1ff80515c91f0679eabb0e77.jpg"
      height="400px"
      cover
    ></v-img>

    <v-card-text>
      <p class="text-center">
        Enter the verification code we just sent you on your mobile phone.
      </p>

      <v-text-field
        v-model="code"
        class="mt-3"
        type="number"
        label="Verification Code"
        prepend-icon="mdi-numeric"
        outlined
        dense
      ></v-text-field>
    </v-card-text>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      code: null,
    };
  },
};
</script>

<style>
.otp-input {
  width: 10px;
  height: 10px;
  padding: 5px;
  margin: 0 10px;
  font-size: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
