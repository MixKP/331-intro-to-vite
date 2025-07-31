<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="no-underline text-slate-700"
    :to="{ name: 'event-detail-view', params: { id: event.id } }"
  >
    <div
      class="cursor-pointer border border-gray-600 p-5 w-64 mb-4 hover:scale-105 hover:shadow-sp transition-transform"
    >
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>
