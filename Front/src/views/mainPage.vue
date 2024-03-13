<script setup>
    import headerBar from '@/components/headerBar.vue';
    import potoCard from '@/components/potoCard.vue';
</script>

<template>
    <div>
        <headerBar></headerBar>
        <div>
            <div class="container mx-auto px-3 grid gap-4 grid-cols-3">
                <div v-for="card in 10">
                    <potoCard></potoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

