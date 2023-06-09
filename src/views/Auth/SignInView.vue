<script setup lang="ts">
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeaderVue from '@/components/Layout/SignUpHeader.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import type SignIn from '@/types/signin'
import { useRouter } from 'vue-router'

const API_URL = import.meta.env.VITE_API_URL as string
const userStore = useUserStore()
const router = useRouter()

onMounted(async () => {
  // if user has token/logged in, push to dashboard
  if (userStore.isLoggedIn) router.push({ name: 'dashboard' })
})

const form = ref<SignIn>({
  email: '',
  password: ''
})

const signIn = async (): Promise<void> => {
  try {
    // send req to API
    const { data } = await axios.post(API_URL + '/login', form.value)

    // save token to localStorage
    localStorage.setItem('access_token', data.result.access_token)

    // fetch user data
    await userStore.fetchUser()

    // redirect to add product page
    router.push({ name: 'dashboard' })
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
          @submit.prevent="signIn"
          action=""
          method="POST"
          class="bg-white rounded-[30px] p-6 md:max-w-[435px] mx-auto w-full flex flex-col shadow-sm"
        >
          <p class="text-dark font-bold text-[26px] mb-5">Sign In</p>

          <div class="flex flex-col gap-[18px]">
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
          </div>
          <button type="submit" class="btn-primary mt-[30px]">Sign In</button>
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
