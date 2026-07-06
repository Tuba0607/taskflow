<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      >
        <div class="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
          <div class="mb-6 flex items-center justify-between">
            <h2 class="text-2xl font-bold">Create Task</h2>

            <button @click="closeModal">
              <Icon name="lucide:x" size="24" />
            </button>
          </div>
          <form @submit.prevent="createTask">
            <div class="space-y-5">
              <input
                v-model="title"
                type="text"
                autofocus
                placeholder="Task title"
                class="w-full rounded-xl border border-slate-200 p-3"
              />

              <select
                v-model="priority"
                class="w-full rounded-xl border border-slate-200 p-3"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div class="mt-8 flex justify-end gap-3">
              <button
                type="button"
                class="rounded-xl border px-5 py-3"
                @click="closeModal"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTasksStore } from "../stores/tasks.store";

import type { TaskPriority } from "../stores/tasks.store";

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(["close"]);

const tasksStore = useTasksStore();

const title = ref("");
const priority = ref<TaskPriority>("Low");

function createTask() {
  if (!title.value.trim()) return;

  tasksStore.addTask(title.value, priority.value);

  title.value = "";
  priority.value = "Low";

  emit("close");
}
function resetForm() {
  title.value = "";
  priority.value = "Low";
}

function closeModal() {
  resetForm();
  emit("close");
}
</script>
