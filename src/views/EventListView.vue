<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import CategoryOrganizer from '@/components/CategoryOrganizer.vue'
import EventService from '@/services/EventService'
import { ref, onMounted, computed, watchEffect, watch} from 'vue'
import { useRouter } from 'vue-router'
import type { Event } from '@/types'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const router = useRouter() // Add this line


const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
  return page.value < totalPages
})

const handlePageSizeChange = (event: Event) => {
  const newSize = parseInt((event.target as HTMLSelectElement).value)
  router.push({
    name: 'event-list-view',
    query: { page: 1, size: newSize }
  })
}

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    default: 3 // Default page size
  }
})
const page = computed(() => props.page)
const pageSize = computed(() => props.size)

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'])
      })
      .catch(error => {
        console.error('There was an error! ', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->

  <div class="page-size-selector">
    <label for="page-size">Events per page: </label>
    <select
      id="page-size"
      :value="pageSize"
      @change="handlePageSizeChange"
      class="size-selector"
    >
      <option v-for="size in 10" :key="size" :value="size">
        {{ size }}
      </option>
    </select>
  </div>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink id="page-prev" :to="{ name: 'event-list-view', query: { page: page - 1 } }" rel="prev" v-if="page != 1">&#60; Previous Page</RouterLink>
      <RouterLink id="page-next" :to="{ name: 'event-list-view', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">Next Page &#62;</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
