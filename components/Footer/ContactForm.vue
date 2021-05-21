<template>
  <b-form v-if="show" @submit="onSubmit">
    <b-form-row>
      <b-col md="6" sm="6">
        <b-form-group
          id="input-group-1"
          label="Your Name:"
          label-for="input-1"
          class="mb-0"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            :state="validName"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validName">
            Your name must contain at least 3 characters
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="6">
        <b-form-group
          id="input-group-2"
          class="mb-0"
          label="Email address:"
          label-for="input-2"
          description="We'll never share it."
        >
          <b-form-input
            id="input-2"
            ref="usrEmail"
            v-model="form.email"
            type="email"
            placeholder="your-email@example.com"
            :state="validEmail"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validEmail">
            {{ validEmailMessage }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          id="input-group-3"
          label="Your Message:"
          label-for="input-3"
        >
          <b-form-textarea
            id="input-3"
            v-model="form.message"
            placeholder="Hi I'm ..."
            rows="3"
            max-rows="6"
            :state="validMessage"
            required
          ></b-form-textarea>
          <b-form-invalid-feedback :state="validMessage">
            Your message must contain at least 10 characters
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <div class="w-100"></div>
      <b-col cols="12">
        <b-button type="submit" variant="second-color"> Send message </b-button>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        message: '',
      },
      show: true,
      mounted: false,
    }
  },
  computed: {
    validName() {
      return this.form.name.length === 0 ? null : this.form.name.length >= 3
    },
    validEmail() {
      return this.form.email.length === 0
        ? null
        : this.$refs.usrEmail.checkValidity()
    },
    validMessage() {
      return this.form.message.length === 0
        ? null
        : this.form.message.length >= 10
    },
    validEmailMessage() {
      if (this.mounted) {
        return this.$refs.usrEmail.validationMessage
      }
      return ''
    },
  },
  mounted() {
    this.mounted = true
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  },
}
</script>
