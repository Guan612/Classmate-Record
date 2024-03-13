<script setup>
import { ref } from 'vue';
import { NAnchor, NTabs } from 'naive-ui';
//绑定placeholder渲染
let placeholder = ref('123333');
let search = () => {
    console.log('点击了')
}
</script>

<template>
    <div class="w-full h-16 bg-gray-200 p-4 flex navbar">
        <div class="flex">同学录</div>
    </div>
</template>

<style>
.navbar {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8);
}
</style>