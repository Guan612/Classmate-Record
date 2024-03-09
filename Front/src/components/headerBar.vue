<script setup>
import { ref } from 'vue';
//绑定placeholder渲染
let placeholder = ref('123333');
let search = ()=>{
    console.log('点击了')
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">同学录</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">主页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">上传照片</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" :placeholder aria-label="Search">
                    <button class="btn btn-outline-light" type="submit" @click="search">Search</button>
                </form>

                <div class="d-flex">
                    <button class="btn btn-outline-light" type="submit" @click="accont">账户</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar{
    background: linear-gradient(to right, #5BCEFA, #F5A9B8);
}
</style>