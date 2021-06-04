<template>
  <b-form v-if="show" @submit="onSubmit">
    <b-form-row>
      <b-col md="6" sm="6">
        <b-form-group
          id="input-group-1"
          :label="$t('contact.form.name.label')"
          label-for="input-1"
          class="mb-0"
          :description="$t('contact.form.name.description')"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            :placeholder="$t('contact.form.name.placeholder')"
            :state="validName"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validName">
            {{ $t('contact.form.name.validmsg') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="6">
        <b-form-group
          id="input-group-2"
          class="mb-0"
          :label="$t('contact.form.email.label')"
          label-for="input-2"
          :description="$t('contact.form.email.description')"
        >
          <b-form-input
            id="input-2"
            ref="usrEmail"
            v-model="form.email"
            type="email"
            :placeholder="$t('contact.form.email.placeholder')"
            :state="validEmail"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="validEmail">
            {{ $t('contact.form.email.validmsg') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          id="input-group-3"
          :label="$t('contact.form.subject.label')"
          label-for="input-3"
          :description="$t('contact.form.subject.description')"
        >
          <b-form-input
            id="input-3"
            v-model="form.subject"
            :placeholder="$t('contact.form.subject.placeholder')"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          id="input-group-4"
          :label="$t('contact.form.message.label')"
          label-for="input-4"
          :description="$t('contact.form.message.description')"
        >
          <b-form-textarea
            id="input-4"
            v-model="form.message"
            :placeholder="$t('contact.form.message.placeholder')"
            rows="3"
            max-rows="6"
            :state="validMessage"
            required
          ></b-form-textarea>
          <b-form-invalid-feedback :state="validMessage">
            {{ $t('contact.form.message.validmsg') }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <div class="w-100"></div>
      <b-col cols="12">
        <b-button type="submit" variant="secondary">
          {{ $t('contact.form.button') }}
        </b-button>
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
        subject: '',
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
