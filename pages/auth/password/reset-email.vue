<template>
  <section class="authentication">
      <div class="auth-body">
          <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
              Reset Password
          </h1>
          <form class="auth-form" @submit.prevent="submit">
              <alert-success
                :form="form">{{ status }}
              </alert-success>
              <div class="form-group">
                  <base-input
                    :form="form"
                    field="email"
                    v-model="form.email"
                    placeholder="Email"
                  ></base-input>
              </div>
              <div class="text-right">
                  <base-button :loading="form.busy">
                     Send Reset Link
                  </base-button>
              </div>
          </form>
      </div>
  </section>
</template>

<script>
export default {
  middleware: ['guest'],
  data() {
    return {
      status: '',
      form: this.$vform({
        email: ''
      })
    };
  },
  methods: {
    submit() {
     this.form
        .post('/password/email')
        .then(res => {
          this.status = res.data.status;
          this.form.reset();
        })
        .catch(e => {
          console.log(e);
      });
    }
  }
}
</script>
