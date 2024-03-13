<script setup>
import { ref } from 'vue';
import { NCard } from 'naive-ui';

let cardText = ref("测试文字");
</script>

<template>
    <n-card title="带封面的卡片" class="card">
        <template #cover>
            <img src="https://media.themoviedb.org/t/p/w220_and_h330_face/6QRJcTEQWRQIa43cgcS9DXXa60W.jpg">
        </template>
        卡片内容
    </n-card>
</template>

<style scoped>
.card{
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>