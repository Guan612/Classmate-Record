<script setup>
import { ref } from 'vue';
import { NAnchor, NTabs, NInput, NButton, NAvatar } from 'naive-ui';
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
                    <img :src="logoImg" class="w-20 " alt="">
                </div>
                <div class="flex mr-1 ml-1">
                    <n-button strong secondary round @click="search">主页</n-button>
                </div>
                <div class="flex mr-1 ml-1">
                    <n-button strong secondary round @click="search">添加</n-button>
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
                <n-avatar round size="large" class="p-1" :src="headImg" />
            </div>
        </div>
    </div>
</template>

<style>
.navbar {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8);
}
</style>