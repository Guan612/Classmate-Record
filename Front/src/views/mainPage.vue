<script setup>
    import headerBar from '@/components/headerBar.vue';
    import potoCard from '@/components/potoCard.vue';
</script>

<template>
    <div>
        <headerBar></headerBar>
        <div>
            <div class="container mx-auto flex flex-row">
                <div v-for="card in 5">
                    <potoCard></potoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

