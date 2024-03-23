import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//用户token
export const useUserStore = defineStore('userInfo', () => {
  const token = ref('')
})

//照片列表
export const usePhotoListStore = defineStore('photoList', () => {
  const photoList = ref([]);
  const getPhotoList = async () => {
    const res = await getPhoto();
    photoList.value = res.data.result.list;
  }
})
