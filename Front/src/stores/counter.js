import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//用户token
export const useUserStore = defineStore('userInfo', () => {
  const token = ref('')
})
