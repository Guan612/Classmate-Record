import {login} from "@/api/user";
import router from "@/router";
import { defineStore } from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore(
    'user',
    ()=>{
        const userData = ref({});
        const handleLogin = async (userInfo) => {
            const {result} = await login(userInfo)
            userData.value = result
            router.push('/')
        }

        //清空数据
        const clearUserInfo = () => {
            userData.value = {}
        }

        return {userData,handleLogin,clearUserInfo}
    },
    {
        persist: true
    }
)