import { defineStore } from 'pinia'

export const useBookingStore = defineStore('bookingStore', {
  state: () => ({
    bookings: []
  }),
  actions: {
    addBooking(booking) {
      this.bookings.push(booking)
    }
  },
  persist: true
})
