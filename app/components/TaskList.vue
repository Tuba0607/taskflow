<template>
  <section class="rounded-3xl border border-slate-200 bg-white shadow-sm">
    <!-- Task filters (All / Active / Completed) -->
    <TaskFilters />

    <div
      v-if="tasksStore.filteredTasks.length"
      class="divide-y divide-slate-100"
    >
      <!-- Render filtered tasks from Pinia store -->
      <div
        v-for="task in tasksStore.filteredTasks"
        :key="task.id"
        class="flex items-center justify-between gap-4 px-6 py-5"
      >
        <div class="flex min-w-0 flex-1 items-center gap-4">
          <!-- Toggle task completion status -->
          <input
            type="checkbox"
            :checked="task.done"
            class="h-5 w-5 shrink-0"
            @change="tasksStore.toggleTask(task.id)"
          />

          <div class="min-w-0 flex-1">
            <!-- Edit mode UI -->
            <div
              v-if="editingTaskId === task.id"
              class="flex items-center w-full gap-3"
            >
              <input
                v-model="editingTitle"
                class="max-w-xl flex-1 rounded-xl border border-slate-200 px-3 py-2"
              />

              <div class="relative">
                <select
                  v-model="editingPriority"
                  class="appearance-none rounded-xl border border-slate-200 px-4 py-2 pr-10 outline-none focus:border-violet-400"
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

              <div class="ml-auto flex items-center gap-2">
                <button
                  class="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
                  @click="saveEdit"
                >
                  Save
                </button>

                <button
                  class="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
                  @click="cancelEdit"
                >
                  Cancel
                </button>
              </div>
            </div>

            <!-- Read only task view -->
            <template v-else>
              <p
                :class="
                  task.done ? 'text-slate-400 line-through' : 'font-medium'
                "
              >
                {{ task.title }}
              </p>

              <p class="text-sm text-slate-400">
                {{ formatDate(task.createdAt) }}
              </p>
            </template>
          </div>
        </div>

        <!-- Task actions -->
        <div
          v-if="editingTaskId !== task.id"
          class="flex shrink-0 items-center gap-3"
        >
          <!-- Priority indicator -->
          <span
            class="rounded-xl px-3 py-1 text-sm font-medium"
            :class="{
              'bg-red-50 text-red-600': task.priority === 'High',
              'bg-orange-50 text-orange-600': task.priority === 'Mid',
              'bg-green-50 text-green-600': task.priority === 'Low',
            }"
          >
            {{ task.priority }}
          </span>

          <button
            class="rounded-xl px-3 py-1 text-sm text-slate-400 hover:text-violet-600"
            @click="startEdit(task)"
          >
            <Icon
              name="lucide:pencil"
              size="18"
              class="text-slate-500 hover:text-violet-600"
            />
          </button>

          <button
            class="rounded-xl px-3 py-1 text-sm text-slate-400 hover:text-red-600"
            @click="openDeleteModal(task.id)"
          >
            <Icon
              name="lucide:trash-2"
              size="18"
              class="text-slate-500 hover:text-red-600"
            />
          </button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center px-6 py-16 text-center"
    >
      <div
        class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600"
      >
        <Icon name="lucide:clipboard-list" size="28" />
      </div>

      <h3 class="text-lg font-semibold text-slate-900">No tasks found</h3>

      <p class="mt-1 max-w-sm text-sm text-slate-500">
        Try another search or create a new task to get started.
      </p>
    </div>
    <DeleteTaskModal
      v-if="showDeleteModal"
      @cancel="cancelDelete"
      @confirm="confirmDelete"
    />
  </section>
</template>

<script setup lang="ts">
import type { TaskPriority } from "../stores/tasks.store";
const tasksStore = useTasksStore();

const editingTaskId = ref<number | null>(null);
const editingTitle = ref("");
const editingPriority = ref<TaskPriority>("Low");
const showDeleteModal = ref(false);
const taskToDelete = ref<number | null>(null);

function startEdit(task: {
  id: number;
  title: string;
  priority: TaskPriority;
}) {
  editingTaskId.value = task.id;
  editingTitle.value = task.title;
  editingPriority.value = task.priority;
}
function saveEdit() {
  if (editingTaskId.value === null || !editingTitle.value.trim()) return;
  tasksStore.updateTask(
    editingTaskId.value,
    editingTitle.value,
    editingPriority.value,
  );

  editingTaskId.value = null;
  editingTitle.value = "";
  editingPriority.value = "Low";
}
function cancelEdit() {
  editingTaskId.value = null;
  editingTitle.value = "";
  editingPriority.value = "Low";
}
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("tr-TR");
}
function openDeleteModal(id: number) {
  taskToDelete.value = id;
  showDeleteModal.value = true;
}

function confirmDelete() {
  if (taskToDelete.value === null) return;

  tasksStore.deleteTask(taskToDelete.value);

  taskToDelete.value = null;
  showDeleteModal.value = false;
}

function cancelDelete() {
  taskToDelete.value = null;
  showDeleteModal.value = false;
}
</script>
