<script setup>
import { uploadPhotoFile,uploadPhotoDes } from '@/api/photo';
import { NInput, NButton, NUpload, unstableCollapseTransitionRtl } from 'naive-ui';
import { ref } from 'vue';

//必须先上传图片返回名字后再进行其他操作
const flag = ref(false);

const photoName = ref('');
const photoDescribe = ref('');
const photoUrl = ref('');

const uploadPhotof = async (file) => {
    const res = await uploadPhotoFile(file)
    console.log(res)
    if(res){
        photoUrl =  res.result.photo_name
    }
}

const uploadPhotoDescribe = async (file) => {
    const res = await uploadPhotoDes(file)
}
</script>

<template>
    <div class="flex justify-center justify-items-center items-center h-screen">
        <div class="card shadow-2xl flex-col card size-300 rounded-lg">
            <div class="flex">
                <n-upload multiple directory-dnd action="http://127.0.0.1:8000//photo/file" :max="5">
                    <n-upload-dragger>
                        <div style="margin-bottom: 12px">
                            <p size="48" :depth="3">
                                上传图标
                            </p>
                        </div>
                        <p style="font-size: 16px">
                            点击或者拖动文件到该区域来上传喵~
                        </p>
                        <p depth="3" style="margin: 8px 0 0 0">
                            请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                        </p>
                    </n-upload-dragger>
                </n-upload>
            </div>
            <div class="flex">
                <n-input type="text" size="large" v-model:value="photoName" placeholder="请输入标题喵" />
            </div>
            <div class="flex">
                <n-input v-model:value="photoDescribe" type="textarea" placeholder="请输入描述喵" />
            </div>
            <div class="flex">
                <n-button type="primary" size="large" class="" @click="uploadPhotof">上传喵~</n-button>
                <n-button type="warning" size="large" class="">保存喵~</n-button>
                <n-button type="success" size="large" class="" @click="uploadPhotoDescribe" v-bind:disabled="flag">发布喵~</n-button>
                <n-button type="error" size="large">取消喵~</n-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background: linear-gradient(to right, #5BCEFA, #F5A9B8)
}
</style>