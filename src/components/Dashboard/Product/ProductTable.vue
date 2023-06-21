<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import { ref, onMounted } from 'vue'
import type Product from '@/types/product'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL as string

// PRODUCTS
onMounted(() => fetchProduct())

// kita pake [] karena mau ngecek OBJECT di dalam array
const products = ref<Product[]>([])

const fetchProduct = async (): Promise<void> => {
  try {
    // send req to API to GET product
    const { data } = await axios.get(API_URL + '/product', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      },
      params: {
        page: pagination.value.current_page,
        limit: 2
      }
    })

    //  assign value to products
    products.value = data.result.data

    // get pagination data
    pagination.value = {
      current_page: data.result.current_page,
      last_page: data.result.last_page
    }
  } catch (error) {
    console.log(error)
  }
}

// PAGINATION
// pay attention to CurrentPage & LastPage. CurrentPage buat tau kita di page berapa. LastPage buat nge-loop berapa page dan ditampilkan di UI
const pagination = ref({
  current_page: 1,
  last_page: 1
})

const changePage = (page: number): void => {
  // set the current_page dgn data yang diklik sesuai argument page pada button
  pagination.value.current_page = page

  // after that, fetch product
  fetchProduct()
}
</script>

<template>
  <!-- <p class="text-base font-semibold text-dark">
                    Latest Transactions <br>
                    <span class="text-sm font-normal">This Week</span>
                </p> -->

  <div class="table-responsive mb-[14px]">
    <table class="w-full" id="tableProductsUp">
      <thead>
        <th class="w-[35%]">Item Information</th>
        <th class="w-[15%]">Status</th>
        <th class="w-[15%]">Price</th>
        <th class="w-[20%]">Stock</th>
        <th class="">Actions</th>
      </thead>
      <tbody>
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
      </tbody>
    </table>
  </div>

  <div
    id="paginationLinks"
    class="mt-auto flex flex-nowrap overflow-x-auto items-center gap-[10px] w-max"
  >
    <button
      @click="changePage(page)"
      v-for="page in pagination.last_page"
      :key="page"
      :class="{ 'is-active': page === pagination.current_page }"
      class="dashboard-link bg-white !p-[13px] min-w-max w-[46px] h-[46px] text-center font-bold leading-[21px] block"
    >
      {{ page }}
    </button>
  </div>
</template>
