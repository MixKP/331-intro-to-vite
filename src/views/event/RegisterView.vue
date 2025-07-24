<script setup lang="ts">
import { toRefs } from 'vue'
import type { Event } from '@/types'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)
const router = useRouter()
const register = () => {
  router.push({ name: 'event-detail-view'})
}
</script>
<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
