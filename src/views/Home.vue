<script setup lang="ts">
</script>

<template>
    <div class="home">
        <div class="name">
            <img src="../assets/name.png" alt="" />
        </div>
        <div class="img" />
    </div>
</template>

<style scoped lang="less">
.home {
    width: 100%;
    height: 100%;
    background: #000;
    color: #fff;
    position: relative;

    .img {
        background: url('../assets/img_1.png') no-repeat center center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .name {
        position: absolute;
        left: 50%;
        top: 50px;
        transform: translateX(-50%) scale(0.5);
    }
}
</style>
