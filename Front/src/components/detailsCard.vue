<script setup>
import { ref } from 'vue';
import { NButton, NSpace, NAvatar, NCarousel } from 'naive-ui';

let userName = ref("小明");
let photoTitle = ref("照片标题");
let photoContent = ref("照片内容");
</script>

<template>
    <div class="flex justify-center justify-items-center items-center h-screen">
        <div class="flex flex-col card shadow-2xl rounded-lg">
            <div class="flex flex-row justify-items-center">
                <div>
                    返回键
                </div>
                <div class="flex">
                    <n-avatar round size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                </div>
                <div class="flex">
                    {{ userName }}
                </div>
            </div>
            <div class="flex">
                <n-carousel show-arrow>
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
                </n-carousel>
            </div>
            <div class="flex flex-col">
                <div class="flex text-2xl font-bold">
                    {{photoTitle}}
                </div>
                <div class="flex text-lg">
                    {{photoContent}}
                </div>
            </div>
            <div class="flex">
                评论区
            </div>
        </div>

    </div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.card {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8);
}
</style>