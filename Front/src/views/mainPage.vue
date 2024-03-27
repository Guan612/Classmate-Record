<script setup>
import headerBar from '@/components/headerBar.vue';
import potoCard from '@/components/potoCard.vue';
import { ref, onMounted} from 'vue';

import { getPhoto } from "@/api/photo"

const photoList = ref([]);
const getPhotoList = async () => {
    const res = await getPhoto();
    photoList.value = res.data.result.list;
}
onMounted(() => getPhotoList());
</script>

<template>
    <div>
        <headerBar></headerBar>
        <div class="">
            <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                <div v-for="card in photoList" :key="card.id" class="flex flex-row m-2">
                    <potoCard :cardText="card.photo_describe" :title="card.photo_name" :imgSrc="card.photo_url"></potoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
