<script setup>
import { ref } from 'vue';
import { NAnchor, NTabs, NInput, NButton, NAvatar } from 'naive-ui';
import {useUserStore} from  '@/stores/userStore.js';
import router from '@/router';

const userStore =  useUserStore();
//绑定placeholder渲染
let placeholder = ref('123333');
let search = () => {
    console.log('点击了')
}

let logoImg = ref('https://upload.wikimedia.org/wikipedia/commons/1/1a/Dolby_logo_2019.svg')
let headImg = ref('https://shef.cc/wp-content/uploads/Mitsushi_MtF_Flag.png')
</script>

<template>
    <div class="flex pb-5">
        <div class="w-full p-4 navbar flex flex-grow justify-between">
            <div class="flex">
                <div class="flex mr-5 ml-5">
                    <img :src="logoImg" class="w-20 hover:scale-110 transform transition-transform duration-300" alt="">
                </div>
                <div class="flex mr-1 ml-1">
                    <router-link to="/">
                        <n-button strong secondary round @click="search" class="hover:scale-110 transform transition-transform duration-300">主页</n-button>
                    </router-link>
                </div>
                <div class="flex mr-1 ml-1">
                    <router-link to="/upload">
                        <n-button strong secondary round @click="search" class="hover:scale-110 transform transition-transform duration-300">添加</n-button>
                    </router-link>
                </div>
                <div class="flex mr-0 ml-3">
                    <n-input round placeholder="搜索">
                        <template #suffix>
                            <n-icon :component="FlashOutline" />
                        </template>
                    </n-input>
                </div>
                <div class="flex mr-3 ml-1">
                    <n-button strong tertiary round @click="search" type="info">搜索</n-button>
                </div>
            </div>
            <div class="flex flex-end mr-6">
            <!--根据是否登录渲染-->
              <div v-if="userStore.userToken">
                <router-link to="/my">
                  <n-avatar round size="large" class="p-1" :src="headImg" />
                </router-link>
                <div>欢迎你{{userStore.userData.user_name}}</div>
              </div>
              <div v-else>
                <router-link to="/login">还没登录哦</router-link>
              </div>

            </div>
        </div>
    </div>
</template>

<style>
.navbar {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8);
}
</style>