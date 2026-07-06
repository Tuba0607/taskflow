<template>
  <div>
    <aside
      class="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-6 lg:block"
    >
      <div class="mb-10 flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white"
        >
          ✓
        </div>
        <h2 class="text-xl font-bold">TaskFlow</h2>
      </div>

      <nav class="space-y-2">
        <a
          class="block rounded-2xl bg-violet-50 px-4 py-3 font-medium text-violet-700"
        >
          Dashboard
        </a>
        <a
          class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
        >
          Tasks
        </a>
        <a
          class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
        >
          Analytics
        </a>
        <a
          class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
        >
          Settings
        </a>
      </nav>
    </aside>
  </div>
</template>
<script setup lang="ts">
const isDark = ref(false);
</script>
