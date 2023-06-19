<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeaderVue from '@/components/Layout/SignUpHeader.vue'
import { useCategoryStore } from '@/stores/category'
import axios from 'axios'
import { useRouter } from 'vue-router'
import type Product from '@/types/product'

const API_URL = import.meta.env.VITE_API_URL as string
const categoryStore = useCategoryStore()
const router = useRouter()

onMounted(async () => {
  categoryStore.fetchCategories()
})

const form = ref<Product>({
  name: '',
  sku: '',
  quantity: 0,
  price: 0,
  category_id: null
})

const addProduct = async (): Promise<void> => {
  try {
    // send req to API to add product
    const { data } = await axios.post(API_URL + '/product', form.value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })

    // if success, redirect to 'add-product-photo' page | products-add
    router.push({ name: 'add-product-photo', params: { id: data.result.id } })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <section class="relative pb-[50px] bg-dark min-h-screen">
    <HomeNavbar />

    <div class="container mt-[60px] relative z-10">
      <div class="grid items-center justify-between gap-8 md:grid-cols-2">
        <SignUpHeaderVue />

        <form
          @submit.prevent="addProduct"
          action=""
          class="bg-white rounded-[30px] p-6 md:max-w-[435px] mx-auto w-full flex flex-col shadow-sm"
        >
          <p class="text-dark font-bold text-[26px] mb-5">Add First Product</p>

          <div class="flex flex-col gap-[18px]">
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Product name </label>
              <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Write your product name"
                class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Product SKU </label>
              <input
                type="text"
                name="product_sku"
                v-model="form.sku"
                placeholder="Write your product sku"
                class="px-5 py-4 text-base font-medium bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark placeholder:font-normal"
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Quantity </label>
              <input
                type="number"
                name="quantity"
                v-model="form.quantity"
                placeholder="Write your product quantity"
                class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Price </label>
              <input
                type="number"
                name="price"
                v-model="form.price"
                placeholder="Insert your product price"
                class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Category </label>
              <select
                name="category"
                v-model="form.category_id"
                class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none appearance-none border-borderLight focus:border-primary placeholder:text-placeholderText bg-[url('/public/assets/svg/ic-chevron-down.svg')] bg-[calc(100%-20px)_center] bg-no-repeat invalid:required:text-placeholderText"
                required
              >
                <option value="" disabled selected hidden>Select company category</option>
                <option
                  v-for="category in categoryStore.categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn-primary mt-[30px]">Save Product</button>
        </form>
      </div>
    </div>

    <!-- Ornament Option 1 -->
    <!-- <img src="/public/assets/svg/dark-background.svg" class="absolute inset-x-0 top-0 w-full -z-10" alt=""> -->

    <!-- Ornament Option 2 -->
    <img src="/public/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
    <div class="right-triangle"></div>
  </section>
</template>
