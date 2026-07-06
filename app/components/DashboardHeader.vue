<template>
  <header
    class="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between"
  >
    <div>
      <h1 class="text-3xl font-bold">TaskFlow Dashboard</h1>

      <p class="mt-1 text-slate-500">Organize your work and stay productive.</p>
    </div>

    <div class="flex items-center gap-4">
      <input
        v-model="tasksStore.searchQuery"
        type="text"
        placeholder="Search tasks..."
        class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 xl:w-80"
      />

      <!-- Notification -->
      <button
        class="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50 hover:shadow-md"
      >
        <Icon name="lucide:bell" size="20" class="text-slate-600" />
      </button>

      <!-- Avatar -->
      <button
        class="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-lg font-semibold text-white shadow-md transition hover:bg-violet-700"
      >
        T
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTasksStore } from "../stores/tasks.store";

const tasksStore = useTasksStore();
</script>
