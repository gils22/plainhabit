<template>
  <div
    class="grid w-full max-w-5xl grid-cols-1 gap-10 rounded-xl bg-white p-8 shadow-md md:grid-cols-2"
    data-aos="fade-up"
  >
    <div class="flex flex-col justify-center space-y-8">
      <!-- Call To Us -->
      <div class="flex items-start gap-4">
        <div class="rounded-full bg-blue-100 p-3">
          <LucidePhoneCall class="text-primary h-6 w-6" />
        </div>
        <div>
          <h3 class="text-lg font-semibold">Call To Us</h3>
          <p class="text-gray-600">We are available 24/7, 7 days a week.</p>
          <p class="font-medium text-gray-800">WA: +62 812-1619-0556</p>
        </div>
      </div>

      <hr class="border-gray-300" />

      <div class="flex items-start gap-4">
        <div class="rounded-full bg-blue-100 p-3">
          <LucideMail class="text-primary h-6 w-6" />
        </div>
        <div>
          <h3 class="text-lg font-semibold">Write To Us</h3>
          <p class="text-gray-600">Fill out our form and we will contact you.</p>
          <p class="font-medium text-gray-800">Emails: plainhabit@gmail.com</p>
        </div>
      </div>

      <div>
        <p class="text-primary mb-2 font-medium">Follow us on:</p>
        <div class="flex gap-3">
          <a href="#" target="_blank" aria-label="Instagram">
            <LucideInstagram class="text-primary hover:text-primary/80 h-5 w-5 transition" />
          </a>
          <a href="#" target="_blank" aria-label="TikTok">
            <LucideMusic2 class="text-primary hover:text-primary/80 h-5 w-5 transition" />
          </a>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6 self-center">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          v-model="name"
          type="text"
          placeholder="Your Name *"
          class="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Your Email *"
          class="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
          required
        />
        <input
          v-model="phone"
          type="tel"
          placeholder="Your Phone *"
          class="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
          required
        />
      </div>

      <textarea
        v-model="message"
        rows="5"
        placeholder="Your Message"
        class="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
        required
      ></textarea>

      <button
        type="submit"
        class="bg-primary rounded px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  PhoneCall as LucidePhoneCall,
  Mail as LucideMail,
  Instagram as LucideInstagram,
  Music2 as LucideMusic2,
} from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const handleSubmit = () => {
  alert('Thank you! Your message has been submitted.')
  name.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
}
</script>
