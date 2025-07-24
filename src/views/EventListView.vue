<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import CategoryOrganizer from '@/components/CategoryOrganizer.vue'
import EventService from '@/services/EventService'
import { ref, onMounted, computed } from 'vue'
import type { Event } from '@/types'

const events = ref<Event[]>([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)

onMounted(() => {
  EventService.getEvents(2 , page.value)
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
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
