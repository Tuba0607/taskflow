<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <MobileHeader />
    <AppSidebar />

    <main class="min-h-screen p-6 lg:ml-72 lg:p-8">
      <DashboardHeader />
      <DashboardHero @open-create-modal="isCreateModalOpen = true" />
      <StatsCards />
      <TaskForm />
      <TaskList />
    </main>
    <CreateTaskModal
      :is-open="isCreateModalOpen"
      @close="isCreateModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isCreateModalOpen = ref(false);

useHead({
  title: "TaskFlow - Task Management Dashboard",

  meta: [
    {
      name: "description",
      content:
        "TaskFlow is a task management dashboard built with Nuxt, TypeScript, Tailwind CSS and Pinia.",
    },
    {
      name: "keywords",
      content:
        "task management, todo app, Nuxt, Vue, Pinia, TypeScript, Tailwind CSS",
    },
    {
      property: "og:title",
      content: "TaskFlow - Task Management Dashboard",
    },
    {
      property: "og:description",
      content: "Create, edit, filter and organize your tasks with TaskFlow.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],

  link: [
    {
      rel: "canonical",
      href: "https://taskflow.vercel.app",
    },
  ],
});

onMounted(() => {
  const tasksStore = useTasksStore();
  tasksStore.loadTasks();
});
</script>
