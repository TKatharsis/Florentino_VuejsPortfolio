<template>
  <div class="contact">
    <h1 class="text-center">Contact Me</h1>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-control"
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
    <div v-if="submitted" class="alert alert-success mt-3">
      Your message has been sent! Thank you for contacting me.
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioContact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      // Here you can handle the form submission, e.g., send data to an API or email service
      // For now, we'll just set submitted to true
      this.submitted = true;
      
      // Clear the form
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      
      // You can also add additional logic to send the form data to your server
      console.log("Form submitted:", this.formData);
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  margin-top: 20px;
}

.alert {
  margin-top: 20px;
}
</style>
