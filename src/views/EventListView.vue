<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import CategoryOrganizer from '@/components/CategoryOrganizer.vue'
import EventService from '@/services/EventService'
import { ref, onMounted } from 'vue'
import type { Event } from '@/types'

const events = ref<Event[]>([])

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch(error => {
      console.error('There was an error! ', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <CategoryOrganizer v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
