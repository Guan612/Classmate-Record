<script setup>
import { ref } from 'vue';
import { NCard } from 'naive-ui';

let cardText = ref("测试文字");
</script>

<template>
    <template>
        <NCard title="带封面的卡片">
            <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
        卡片内容
        </NCard>
</template>
</template>

<style scoped>
.card{
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>