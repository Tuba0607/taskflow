<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <header
      class="flex items-center gap-3 border-b border-slate-200 bg-white p-5 lg:hidden"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white"
      >
        ✓
      </div>
      <h1 class="text-xl font-bold">TaskFlow</h1>
    </header>

    <AppSidebar />

    <main class="min-h-screen p-6 lg:ml-72 lg:p-8">
      <DashboardHeader />
      <StatsCards />
      <TaskForm />
      <TaskList />
    </main>
  </div>
</template>
<script setup lang="ts">
onMounted(() => {
  const tasksStore = useTasksStore();
  tasksStore.loadTasks();
});
</script>
