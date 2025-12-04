<template>
  <div class="page-container">
    <h1>Book a Session</h1>
    
<form 
  name="booking" 
  method="POST" 
  data-netlify="true" 
@submit.prevent="submitForm($event)"
>
  <input type="hidden" name="form-name" value="booking" />
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
        <label>Date</label>
        <input type="date" v-model="form.date" />
      </div>

      <!-- Time -->
      <div class="form-group">
        <label>Time</label>
        <input type="time" v-model="form.time" />
      </div>

      <!-- Submit Button -->
      <div class="form-group">
        <button type="submit" :disabled="!isFormComplete">Submit Booking</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        type: '',
        details: '',
        date: '',
        time: ''
      }
    }
  },
  computed: {
    isFormComplete() {
      return this.form.name &&
             this.form.email &&
             this.form.phone &&
             this.form.type &&
             this.form.details &&
             this.form.date &&
             this.form.time;
    }
  },
 methods: {
  submitForm(event) {
    if (!this.isFormComplete) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Let Netlify process the form
    event.target.submit();
  }
}

}
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background-color: #2b0d3f; /* deep purple */
  color: #f0f0f0;
  border-radius: 10px;
  box-sizing: border-box;
}

h1 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.radio-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: normal;
}

button {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: #7b3fa6; /* deep purple button */
  color: #f0f0f0;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

button:disabled {
  background-color: #a08bbf; /* lighter disabled color */
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #933cb0; /* slightly brighter on hover */
}
</style>

.page-container {
  max-width: 600px;
  margin: auto;
  padding: 3rem 2rem 2rem 2rem; /* increased top padding to move below navbar */
  background-color: #2b0d3f; /* deep purple */
  color: #f0f0f0;
  border-radius: 10px;
  box-sizing: border-box;
}

