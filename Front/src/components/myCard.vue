<script setup>
import {NButton} from "naive-ui"
</script>

<template>
    <div class="flex justify-center justify-items-center items-center h-screen mx-6">
        <div class="card flex flex-col">
            <div class="flex flex-row">
                <div class="">
                    <img src="" alt="">
                </div>
                <div class="">
                    用户名
                    {{user_name}}
                </div>
            </div>
            <div class="">
                <div class="">
                    <RouterLink to="">
                        上传管理
                    </RouterLink>
                </div>
                <div class="">
                    账号管理
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.card {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>