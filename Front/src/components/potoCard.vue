<script setup>
import { ref } from 'vue';

let cardText = ref("测试文字");
</script>

<template>
    <div class="col flex m-3">
        <div class="card">
            <img src="https://image.tmdb.org/t/p/original/vo3ODtGpSQxI2ajPuSife2dXNyE.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">{{cardText}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>