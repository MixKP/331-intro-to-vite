<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-class">
    <div
      class="p-5 w-64 cursor-pointer border border-slate-600 mb-4 text-right hover:scale-105 hover:shadow-sp transition-transform"
    >
      <h2>{{ event.category }}</h2>
      <h2>{{ event.organizer }}</h2>
    </div>
  </div>
</template>
