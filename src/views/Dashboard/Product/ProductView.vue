<script setup lang="ts">
import ProductHeader from '@/components/Dashboard/Product/ProductHeader.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
import DashboardSidebar from '@/components/Layout/DashboardSidebar.vue'
import DashboardTopBar from '@/components/Layout/DashboardTopBar.vue'
</script>

<template>
  <div class="flex min-h-screen pb-10">
    <DashboardSidebar :activeMenu="'products'" />
    <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
      <DashboardTopBar />
      <ProductHeader />

      <section class="w-full min-h-[90vh] p-4 bg-subtleGrey rounded-2xl flex flex-col">
        <ProductTable />
      </section>
    </main>
  </div>
</template>
