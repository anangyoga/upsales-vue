import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type Category from '@/types/category'

export const useCategoryStore = defineStore('category', () => {
  // api
  const API_URL = import.meta.env.VITE_API_URL as string

  // state
  const categories = ref<Category[]>([])

  // action
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(API_URL + '/category?limit=1000')

      categories.value = data.result.data
    } catch (error) {
      categories.value = []
      console.log(error)
    }
  }
  return { categories, fetchCategories }
})
