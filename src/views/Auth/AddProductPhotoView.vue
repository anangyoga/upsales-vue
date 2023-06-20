<script setup lang="ts">
import HomeNavbar from '@/components/Layout/HomeNavbar.vue'
import SignUpHeaderVue from '@/components/Layout/SignUpHeader.vue'
import type Product from '@/types/product'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const API_URL = import.meta.env.VITE_API_URL as string

// perbedaan useRouter and useRoute
// useRouter untuk mengarahkan ke mana
// kalau Route itu untuk menunjuk route/lokasi sekarang ada di url apa
const router = useRouter()
const route = useRoute()

// products
const product = ref<Product>({
  name: '',
  sku: '',
  quantity: 0,
  price: 0,
  category_id: null
})

// fetch product
const fetchProduct = async (): Promise<void> => {
  // fetch current product
  const { data } = await axios.get(API_URL + '/product', {
    params: { id: route.params.id },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  })
  // assign product data to ref
  product.value = data.result
}

onMounted(() => {
  fetchProduct()
})

// photos
const photos = ref<string[]>([])
const isPhotoUploading = ref<boolean>(false)

const selectPhotos = (e: any) => {
  let files = e.target.files

  if (photos.value.length + files.length > 7) {
    alert('A product can only contains 7 photos')
    return false
  }

  for (let i = 0; i < files.length; i++) {
    photos.value.push(URL.createObjectURL(files[i]))
  }
}

const uploadPhotos = async (): Promise<void> => {
  // set isPhotoLoading to true
  isPhotoUploading.value = true

  try {
    // create Promise.all for uploading photos
    await Promise.all(
      photos.value.map(async (photo) => {
        // convert blo URL to blob file
        const blob = await fetch(photo).then((res) => res.blob())

        // create form data
        const formData = new FormData()

        // append photos to form data with product id
        formData.append('product_id', route.params.id as string)
        formData.append('photo', blob)

        try {
          // upload photo to API
          await axios.post(API_URL + '/product/photo', formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
          })

          alert('Photos uploaded successfully')
        } catch (error) {
          console.log(error)
        }
      })
    )
  } catch (error) {
    console.error(error)
  } finally {
    // set isPhotoUploadint to false
    isPhotoUploading.value = true

    // redirect to dashboard
    router.push({ name: 'dashboard' })
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
          @submit.prevent="uploadPhotos"
          action=""
          class="bg-white rounded-[30px] p-6 md:max-w-[435px] min-h-[550px] w-full mx-auto flex flex-col shadow-sm"
          id="formProduct"
        >
          <p class="text-dark font-bold text-[26px] mb-5">Add Photos</p>
          <!-- Product name & category -->
          <div class="flex items-center w-full gap-3">
            <img src="@/assets/svg/default-image.svg" class="w-[60px] h-[60px]" alt="" />
            <div class="text-dark">
              <h3 class="text-base font-semibold">{{ product.name }}</h3>
              <p class="mt-1 text-xs font-normal">{{ product.category?.name }}</p>
            </div>
          </div>

          <!-- Product photos -->
          <div class="grid grid-cols-2 gap-5 mt-5 mb-20 lg:justify-between md:grid-cols-3">
            <input
              type="file"
              name="photo"
              id="photo"
              class="hidden"
              value=""
              accept="image/x-png,image/jpg,image/jpeg,image/webp"
              ref="file"
              @change="selectPhotos($event)"
            />
            <button
              type="button"
              @click.prevent=";($refs.file as HTMLInputElement).click()"
              class="w-max h-max"
            >
              <img
                src="@/assets/svg/add-image.svg"
                class="w-[100px] h-[100px] object-cover rounded-[18px]"
                alt=""
              />
            </button>

            <!-- Photos template -->
            <template v-for="(photo, index) in photos" :key="index">
              <img :src="photo" class="w-[100px] h-[100px] object-cover rounded-[18px]" alt="" />
            </template>

            <!-- Shown when photos is not empty -->
            <img
              src="@/assets/svg/no-photo.svg"
              v-if="!photos.length"
              class="w-[100px] h-[100px] object-cover rounded-[18px]"
              alt=""
            />
          </div>

          <button type="submit" class="mt-auto btn-primary">Update Product</button>
        </form>
      </div>
    </div>

    <!-- Ornament Option 1 -->
    <!-- <img src="@/assets/svg/dark-background.svg" class="absolute inset-x-0 top-0 w-full -z-10" alt=""> -->

    <!-- Ornament Option 2 -->
    <img src="@/assets/svg/half-circular-ornament.svg" class="absolute bottom-0 z-0" alt="" />
    <div class="right-triangle"></div>
  </section>
</template>
