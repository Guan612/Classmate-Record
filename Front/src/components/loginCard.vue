<script setup>
import { NInput, NButton } from 'naive-ui';
import { ref } from 'vue';
import {login} from '../api/'
let imgSrc = ref('https://upload.wikimedia.org/wikipedia/commons/1/1a/Dolby_logo_2019.svg')
let user_name = ref('');
let password = ref('');

let handleLogin = () => {
    login(user_name.value, password.value).then(res => {
        console.log(res)
    })
}
</script>

<template>
	<div class="flex justify-center justify-items-center items-center h-screen">
		<div class="shadow-2xl flex-col card size-200 rounded-lg">
			<div class="flex flex-row justify-center m-3 md:m-10">
				<div class="flex mr-2 md:mr-5 w-20 md:w-23 flex-col justify-center">
					<p class="flex justify-center">登录</p>
					<img :src="imgSrc">
				</div>
				<div class="flex flex-col">
					<div class="mb-2 md:mb-5">
						用户
					</div>
					<div class="mb-2 md:mb-5">
						<n-input placeholder="请输入用户名" v-model:value="user_name"/>
					</div>
					<div class="mb-2 md:mb-5">
						密码
					</div>
					<div class="mb-2 md:mb-5">
						<n-input placeholder="请输入密码" type="password" v-model:value="password"/>
					</div>
				</div>
			</div>
			<div class="flex flex-col justify-center">
				<div class="flex justify-center mb-3">
					<n-button type="info" class="text-black" @click="handleLogin">登录</n-button>
				</div>
				<div class="flex justify-center">
					<router-link to="/register">
						<n-button strong secondary class="w-100" @click="">还没有注册？</n-button>
					</router-link>
				</div>
			</div>
		</div>
	</div>

</template>

<style>
.card {
	background: linear-gradient(to right, #5BCEFA, #F5A9B8)
	
}
</style>../api