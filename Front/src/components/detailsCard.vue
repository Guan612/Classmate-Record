<script setup>
import { ref } from 'vue';
import { NButton, NSpace, NAvatar, NCarousel } from 'naive-ui';

// let userName = ref("小明");
// let photoTitle = ref("照片标题");
// let photoContent = ref("照片内容");
const props = defineProps({
    userName: String,
    cardText: String,
    title: String,
    imgSrc: String,
})

</script>

<template>
    <div class="flex justify-center justify-items-center items-center h-screen mx-6">
        <div class="flex flex-col card shadow-2xl rounded-lg p-3">
            <div class="flex flex-row justify-items-center">
                <div class="flex mx-1">
                    返回键
                </div>
                <div class="flex mx-1">
                    <n-avatar round size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                </div>
                <div class="flex mx-2">
                    {{ userName }}
                </div>
            </div>
            <div class="flex m-5">
                <n-carousel show-arrow class="rounded-lg">
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
                    <img class="carousel-img"
                        src="https://p3.itc.cn/images01/20230925/43d7f951f84549d69fdaa790d1d5dbeb.png">
                    <img class="carousel-img"
                        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
                    <img class="carousel-img"
                        src="https://5b0988e595225.cdn.sohucs.com/images/20190723/6250a03233854cf4a72a04511af66da5.jpeg">
                </n-carousel>
            </div>
            <div class="flex flex-col">
                <div class="flex text-2xl font-bold">
                    {{title}}
                </div>
                <div class="flex text-lg">
                    {{cardText}}
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