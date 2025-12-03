<template>
  <section class="container" style="padding:2rem 1rem;">
    <h1>Book a Session</h1>

    <form @submit.prevent="submit" novalidate style="max-width:700px;margin-top:1rem;">
      
      <div>
        <label>Full name</label>
        <input v-model="form.name" required />
      </div>

      <div>
        <label>Email</label>
        <input type="email" v-model="form.email" required />
      </div>

      <div>
        <label>Phone</label>
        <input type="tel" v-model="form.phone" />
      </div>

      <div style="display:flex; gap:.5rem;">
        <div style="flex:1;">
          <label>Date</label>
          <input type="date" v-model="form.date" :min="today" required />
        </div>
        <div style="flex:1;">
          <label>Time</label>
          <input type="time" v-model="form.time" required />
        </div>
      </div>

      <div>
        <label>Session Details</label>
        <textarea v-model="form.details" rows="4" placeholder="Describe the shoot: location, number of people, mood, props, etc."></textarea>
      </div>

      <div style="margin-top:.6rem;">
        <button class="btn" type="submit">Submit Booking</button>
      </div>

      <div v-if="message" style="margin-top:1rem; color:green;">
        {{ message }}
      </div>

    </form>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useBookingStore } from '../store/useBookingStore'
import { formatISO } from 'date-fns'

export default {
  setup() {
    const store = useBookingStore()
    const today = new Date().toISOString().split('T')[0]
    const form = ref({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      details: ''
    })
    const message = ref('')

    function submit() {
      if (!form.value.name || !form.value.email || !form.value.date || !form.value.time) {
        message.value = 'Please fill all required fields (name, email, date, time).'
        return
      }

      const booking = {
        id: 'b_' + Date.now(),
        ...form.value,
        createdAt: formatISO(new Date())
      }

      store.addBooking(booking)

      message.value = 'Thanks! Your booking request has been saved. I will contact you soon.'
      form.value = { name:'', email:'', phone:'', date:'', time:'', details:'' }
    }

    return { form, submit, message, today }
  }
}
</script>

<style scoped></style>
