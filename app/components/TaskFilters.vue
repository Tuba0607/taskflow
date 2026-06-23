<template>
  <div class="flex items-center justify-between border-slate-200 px-6 py-4">
    <div class="flex gap-6">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="
          tasksStore.filter === filter
            ? 'font-semibold text-violet-600'
            : 'text-slate-500'
        "
        @click="tasksStore.setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <button
      class="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
      @click="tasksStore.toggleSortDirection"
    >
      <Icon name="lucide:arrow-up-down" size="16" />
      Sort
    </button>
  </div>
</template>

<script setup lang="ts">
import type { TaskFilter } from "../stores/tasks.store";

const tasksStore = useTasksStore();

const filters: TaskFilter[] = ["All", "Active", "Completed"];
</script>
