<template>
  <section
    class="mb-8 rounded-[28px] bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-white shadow-xl"
  >
    <div
      class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div>
        <p class="mb-2 text-sm font-medium text-violet-100">Today’s focus</p>

        <h2 class="text-3xl font-bold">Welcome back 👋</h2>

        <p class="mt-3 max-w-2xl text-violet-100">
          You have active tasks waiting. Stay focused and complete your next
          action.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          class="rounded-2xl bg-white px-5 py-3 font-semibold text-violet-700 cursor-pointer"
          @click="$emit('open-create-modal')"
        >
          Create Task
        </button>

        <button
          class="rounded-2xl border border-white/30 px-5 py-3 font-semibold text-white"
        >
          View Analytics
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineEmits(["open-create-modal"]);
</script>
