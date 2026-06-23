<template>
  <section class="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
    <div
      v-for="card in cards"
      :key="card.label"
      class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <p class="text-sm text-slate-500">{{ card.label }}</p>
      <p class="mt-2 text-3xl font-bold">{{ card.value }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../stores/tasks.store";
const tasksStore = useTasksStore();
const cards = computed(() => [
  { label: "Total Tasks", value: tasksStore.totalTasks },
  { label: "Completed Tasks", value: tasksStore.completedTasks },
  { label: "Active Tasks", value: tasksStore.activeTasks },
  { label: "High Priority Tasks", value: tasksStore.highPriorityTasks },
]);
</script>
