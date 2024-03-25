<script setup>
import { NInput, NButton, NUpload } from 'naive-ui';
</script>

<template>
    <div class="flex justify-center justify-items-center items-center h-screen">
        <div class="card shadow-2xl flex-col card size-200 rounded-lg">
            <div>
                <n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
                    <n-upload-dragger>
                        <div style="margin-bottom: 12px">
                            <n-icon size="48" :depth="3">
                                上传图标
                            </n-icon>
                        </div>
                        <n-text style="font-size: 16px">
                            点击或者拖动文件到该区域来上传
                        </n-text>
                        <n-p depth="3" style="margin: 8px 0 0 0">
                            请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                        </n-p>
                    </n-upload-dragger>
                </n-upload>
            </div>
            <div>
                输入标题
            </div>
            <div>
                输入描述
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>