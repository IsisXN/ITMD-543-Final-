import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  const bookings = ref([])

  function addBooking(booking) {
    bookings.value.push(booking)
  }

  return { bookings, addBooking }
})
