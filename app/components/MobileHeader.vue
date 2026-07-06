<template>
  <header class="border-b border-slate-200 bg-white p-5 lg:hidden">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white"
        >
          ✓
        </div>

        <h2 class="text-xl font-bold">TaskFlow</h2>
      </div>

      <button
        class="rounded-xl p-2 text-slate-600 hover:bg-slate-100"
        @click="openMenu"
      >
        <Icon name="lucide:menu" size="22" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="mobile-menu">
        <div v-if="isMenuOpen" class="fixed inset-0 z-50">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/40" @click="closeMenu" />

          <!-- Drawer -->
          <div class="absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
            <div class="mb-10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white"
                >
                  ✓
                </div>

                <h2 class="text-xl font-bold">TaskFlow</h2>
              </div>

              <button
                class="rounded-xl p-2 text-slate-600 hover:bg-slate-100"
                @click="closeMenu"
              >
                <Icon name="lucide:x" size="22" />
              </button>
            </div>

            <nav class="space-y-2">
              <a
                class="block rounded-2xl bg-violet-50 px-4 py-3 font-medium text-violet-700"
                @click="closeMenu"
              >
                Dashboard
              </a>

              <a
                class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
                @click="closeMenu"
              >
                Tasks
              </a>

              <a
                class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
                @click="closeMenu"
              >
                Analytics
              </a>

              <a
                class="block rounded-2xl px-4 py-3 font-medium text-slate-500 hover:bg-slate-50"
                @click="closeMenu"
              >
                Settings
              </a>
            </nav>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

function openMenu() {
  isMenuOpen.value = true;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active .absolute.left-0,
.mobile-menu-leave-active .absolute.left-0 {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from .absolute.left-0,
.mobile-menu-leave-to .absolute.left-0 {
  transform: translateX(-100%);
}
</style>
