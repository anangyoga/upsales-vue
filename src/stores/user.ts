import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type User from '@/types/user'

export const useUserStore = defineStore('user', () => {
  // api url
  const API_URL = import.meta.env.VITE_API_URL as string

  //   state
  const user = ref<User>({})

  //   action / method
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      user.value = response.data
    } catch (error) {
      user.value = {}
      console.error(error)
    }
  }

  //   getters / computed
  const isLoggedIn = computed(() => {
    return localStorage.getItem('access_token') !== null
  })

  return { user, fetchUser, isLoggedIn }
})
