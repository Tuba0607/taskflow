<template>
  <section
    class="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
  >
    <form
      class="flex flex-col gap-3 xl:flex-row"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="title"
        class="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-400"
        placeholder="What needs to be done?"
      />

      <div class="relative">
        <select
          v-model="priority"
          class="appearance-none rounded-2xl border border-slate-200 px-4 py-3 pr-10 outline-none focus:border-violet-400"
        >
          <option value="Low">Low</option>
          <option value="Mid">Mid</option>
          <option value="High">High</option>
        </select>

        <Icon
          name="lucide:chevron-down"
          class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        />
      </div>

      <button
        class="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
        type="submit"
      >
        + Add Task
      </button>
    </form>
  </section>
</template>
<script setup lang="ts">
import type { TaskPriority } from "../stores/tasks.store";

const tasksStore = useTasksStore();

const title = ref("");
const priority = ref<TaskPriority>("Low");

function handleSubmit() {
  if (!title.value.trim()) return;
  console.log("Adding task:", title.value, priority.value);
  tasksStore.addTask(title.value, priority.value);

  title.value = "";
  priority.value = "Low";
}
</script>
