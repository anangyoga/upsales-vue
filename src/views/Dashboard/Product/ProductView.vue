<script setup lang="ts">
import ProductHeader from '@/components/Dashboard/Product/ProductHeader.vue'
import ProductTable from '@/components/Dashboard/Product/ProductTable.vue'
</script>

<template>
  <ProductHeader />
  <section class="w-full p-4 bg-subtleGrey rounded-2xl flex flex-col">
    <ProductTable />
  </section>
</template>
