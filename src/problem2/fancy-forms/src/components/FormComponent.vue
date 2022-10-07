<template>
  <div class = "form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="ETH Address:"
        label-for="input-1"
        description="Enter the address to send your ethereum."
      >
        <b-form-input
          id="input-1"
          v-model="form.addr"
          placeholder="Amount of ethereum to send."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Amount to Send:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.amount"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="OTP Authentication:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.otp"
          placeholder="Enter OTP"
          required
        ></b-form-input>
      </b-form-group>
      <div class = "mt-2">
        <b-button style="margin-right: 10px" type="submit" variant="primary">Send Tokens</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          otp: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.addr = ''
        this.form.amount = 0
        this.form.otp = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.form {
  margin-top: 5px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>