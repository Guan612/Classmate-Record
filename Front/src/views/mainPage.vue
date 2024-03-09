<script setup>
    import headerBar from '@/components/headerBar.vue';
    import potoCard from '@/components/potoCard.vue';
</script>

<template>
    <div>
        <headerBar></headerBar>
        <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 flex justify-center">
                <div v-for="card in 10">
                    <potoCard></potoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

