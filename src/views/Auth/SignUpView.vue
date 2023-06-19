<script setup lang="ts">
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeaderVue from '@/components/Layout/SignUpHeader.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { useCategoryStore } from '@/stores/category'
import type Register from '@/types/register'
import { useRouter } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL as string
const userStore = useUserStore()
const categoryStore = useCategoryStore()
const router = useRouter()

onMounted(async () => {
  categoryStore.fetchCategories()
})

const form = ref<Register>({
  name: '',
  email: '',
  password: '',
  category_id: null
})

const register = async (): Promise<void> => {
  try {
    // send req to API
    const { data } = await axios.post(API_URL + '/register', form.value)

    // save token to localStorage
    localStorage.setItem('access_token', data.result.access_token)

    // fetch user data
    await userStore.fetchUser()

    // redirect to add product page
    router.push({ name: 'products-add' })
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
          @submit.prevent="register"
          action=""
          method="POST"
          class="bg-white rounded-[30px] p-6 md:max-w-[435px] mx-auto w-full flex flex-col shadow-sm"
        >
          <p class="text-dark font-bold text-[26px] mb-5">Sign Up</p>

          <div class="flex flex-col gap-[18px]">
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Company name </label>
              <input
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Write your company name"
                class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                required
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Email address </label>
              <!-- Error state class: !border-danger !text-danger -->
              <input
                type="email"
                name="email"
                v-model="form.email"
                placeholder="Write your email"
                class="bg-transparent px-5 py-4 text-base border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark placeholder:font-normal font-medium"
                required
              />
            </div>
            <!-- form group -->
            <div class="flex flex-col gap-2">
              <label for="" class="text-base font-medium text-dark"> Password </label>
              <input
                type="password"
                name="password"
                v-model="form.password"
                placeholder="Secure your strong password"
                class="px-5 py-4 text-base bg-transparent border-2 rounded-full outline-none border-borderLight focus:border-primary placeholder:text-placeholderText text-dark"
                required
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
          <button type="submit" class="btn-primary mt-[30px]">Continue Create Account</button>
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
