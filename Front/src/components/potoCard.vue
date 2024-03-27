<script setup>
import { onMounted, ref, toRefs} from 'vue';
import { NCard, NEllipsis } from 'naive-ui';

//let imgSrc = ref("https://media.themoviedb.org/t/p/w220_and_h330_face/6QRJcTEQWRQIa43cgcS9DXXa60W.jpg");
let cardUrl = ref("/detail");
const props = defineProps({
    cardText: String,
    title: String,
    //cardUrl: Number,
    imgSrc: String,
})
onMounted(() => {
    console.log(props.imgSrc);
})
</script>

<template>
    <n-card :title
        class="card hover:drop-shadow-2xl hover:scale-110 transform transition-transform duration-300 rounded-lg">
        <template #cover>
            <img :src="imgSrc">
        </template>
        <n-ellipsis class=" md:text-sm xl:text-base overflow-hidden">
            {{ cardText }}
        </n-ellipsis>
        <div>
            <RouterLink :to="cardUrl">详情</RouterLink>
        </div>
       
    </n-card>
</template>

<style scoped>
.card {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>