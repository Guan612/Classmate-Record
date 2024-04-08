import {login} from "@/api/user";
import router from "@/router";
import { defineStore } from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore(
    'user',
    ()=>{
        const userToken = ref('');
        const userData = ref({});
        const handleLogin = async (userInfo) => {
            const {result} = await login(userInfo)
            userData.value = result
            //console.log(result)
            userToken.value = result.token
            //console.log(userToken.value)
            router.push('/')
        }

        //清空数据
        const clearUserInfo = () => {
            userToken.value = ''
        }

        return {userToken,userData,handleLogin,clearUserInfo}
    },
    {
        persist: true
    }
)