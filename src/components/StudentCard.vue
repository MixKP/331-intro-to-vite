<script setup lang="ts">
import { ref } from 'vue'
import type { Student } from '@/types'
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-class">
    <div
      class="p-5 w-64 cursor-pointer border border-slate-600 mb-4 hover:scale-105 hover:shadow-sp transition-transform"
    >
      <h2>{{ student.name }} {{ student.surname }}</h2>
      <p>{{ student.gpa }}</p>
    </div>
  </div>
</template>
