<script setup>
    import headerBar from '@/components/headerBar.vue';
    import potoCard from '@/components/potoCard.vue';
    import sideBar from '@/components/sideBar.vue';
</script>

<template>
    <div>
        <headerBar></headerBar>
        <div class="">
            <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                <div v-for="card in 10" class="flex flex-row m-2">
                    <potoCard></potoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

