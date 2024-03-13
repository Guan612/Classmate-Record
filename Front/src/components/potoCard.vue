<script setup>
import { ref } from 'vue';
import { NCard } from 'naive-ui';

let cardText = ref("测试文字");
let title = ref("测试标题");
let imgSrc = ref("https://media.themoviedb.org/t/p/w220_and_h330_face/6QRJcTEQWRQIa43cgcS9DXXa60W.jpg");

</script>

<template>
    <n-card :title class="card hover:drop-shadow-2xl hover:scale-110 transform transition-transform duration-300 rounded-lg">
        <template #cover>
            <img :src="imgSrc">
        </template>
        <div class=" md:text-sm xl:text-base">
            {{cardText}}
        </div>
    </n-card>
</template>

<style scoped>
.card{
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>