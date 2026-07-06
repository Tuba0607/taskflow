<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
      <h3 class="text-xl font-bold">Delete Task</h3>

      <p class="mt-2 text-slate-500">
        Are you sure you want to delete this task?
      </p>

      <p class="mt-1 text-sm text-red-500">This action cannot be undone.</p>

      <div class="mt-6 flex justify-end gap-3">
        <button
          class="rounded-xl border border-slate-200 px-4 py-2"
          @click="$emit('cancel')"
        >
          Cancel
        </button>

        <button
          class="rounded-xl bg-red-600 px-4 py-2 text-white"
          @click="$emit('confirm')"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
