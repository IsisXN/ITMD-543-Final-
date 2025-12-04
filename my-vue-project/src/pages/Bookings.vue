<template>
  <div class="page-container">
    <h1>Book a Session</h1>

    <form @submit.prevent="submitForm" class="bookings-form">
      <!-- Name -->
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="form.name" placeholder="Your full name" />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="form.email" placeholder="you@example.com" />
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label for="phone">Phone</label>
        <input id="phone" type="tel" v-model="form.phone" placeholder="(123) 456-7890" />
      </div>

      <!-- Session Type -->
      <div class="form-group">
        <label>Session Type</label>
        <div class="radio-group">
          <label><input type="radio" value="Portrait" v-model="form.type" /> Portrait</label>
          <label><input type="radio" value="Event" v-model="form.type" /> Event</label>
          <label><input type="radio" value="Other" v-model="form.type" /> Other</label>
        </div>
      </div>

      <!-- Session Details -->
      <div class="form-group">
        <label>Session Details</label>
        <textarea v-model="form.details" rows="4" placeholder="Describe the shoot: location, number of people, mood, props, etc."></textarea>
      </div>

      <!-- Date -->
      <div class="form-group">
        <label for="date">Preferred Date</label>
        <input id="date" type="date" v-model="form.date" />
      </div>

      <!-- Time -->
      <div class="form-group">
        <label for="time">Preferred Time</label>
        <input id="time" type="time" v-model="form.time" />
      </div>

      <button type="submit">Submit Booking</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Bookings",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        type: "",
        details: "",
        date: "",
        time: ""
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Booking submitted for ${this.form.name} on ${this.form.date} at ${this.form.time}!`);
      // Reset form
      this.form = {
        name: "",
        email: "",
        phone: "",
        type: "",
        details: "",
        date: "",
        time: ""
      };
    }
  }
};
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #f0f0f0; /* text color for dark theme */
}

.bookings-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.radio-group {
  display: flex;
  gap: 1rem;
}

.bookings-form input,
.bookings-form textarea {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #a084c2;
  background-color: #3b1e5a;
  color: #f0f0f0;
}

.bookings-form input:focus,
.bookings-form textarea:focus {
  border-color: #7b3fa6;
  outline: none;
  box-shadow: 0 0 6px #7b3fa6;
}

.bookings-form button {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: #7b3fa6;
  color: #f0f0f0;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.bookings-form button:hover {
  background-color: #9b5fc0;
}
</style>
