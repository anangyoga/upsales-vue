<script setup lang="ts">
import DashboardSidebar from '@/components/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Layout/DashboardTopBar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const activeMenu = computed<any>(() => route.meta.activeMenu || 'dashboard')
const isDashboard = computed<any>(() => route.meta.isDashboard || false)
</script>

<template>
  <div class="flex min-h-screen pb-10">
    <DashboardSidebar :activeMenu="activeMenu" />
    <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
      <DashboardTopBar :isDashboard="isDashboard" />
      <RouterView />
    </main>
  </div>
</template>
