<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(defineProps<{
  resource: string
}>(), {
  resource: 'page'
})
</script>

<template>
  <h1>Oops!</h1>
  <h3>The page you're looking for is not here</h3>
  <h3>The {{ resource }} you are looking for is not here.</h3>
  <router-link :to="{ name: 'event-list-view' }">Back to the home page</router-link>
</template>
