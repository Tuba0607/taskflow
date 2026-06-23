# TaskFlow

TaskFlow is a task management dashboard built with Nuxt 4, TypeScript, Tailwind CSS and Pinia.

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks (All, Active, Completed)
- Sort tasks by priority
- Priority badges (High, Mid, Low)
- Local storage persistence
- Responsive dashboard UI
- State management with Pinia

## Tech Stack

- Nuxt 4
- Vue 3 Composition API
- TypeScript
- Tailwind CSS
- Pinia
- Lucide Icons

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
components/
├── DashboardHeader.vue
├── StatsCards.vue
├── TaskFilters.vue
├── TaskForm.vue
└── TaskList.vue

stores/
└── tasks.store.ts
```
