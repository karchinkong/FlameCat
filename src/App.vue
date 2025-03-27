<template>
    <div class="container">
        <router-view />
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
body, html {
    width: 100%;
    height: 100%;
}

.container, #root, .van-config-provider {
    width: 100%;
    height: 100%;
    background: var(--van-background-2);
}
</style>
