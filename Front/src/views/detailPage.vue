<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import detailCard from "@/components/detailsCard.vue"
import headerCard from "@/components/headerBar.vue"
import { getPhotoDetail } from "@/api/photo"

let result = ref({})
let userName = ref("")
const route = useRoute();

// 获取路由参数
const getParamValue = () => {
    const paramValue = route.params.id;
    return paramValue;
};

onMounted(async () => {
    const res = await getPhotoDetail(getParamValue())
    result = res.data.result
    //userName = res.data.result.classmeet_user.user_name
    //console.log(result)
})
</script>

<template>
    <headerCard></headerCard>
    <detailCard :cardText="result.photo_describe" :title="result.photo_name"></detailCard>
</template>

<style scoped></style>
