<script setup lang="ts">
import { ref } from 'vue';

const groupPhotos = ref([
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' }
]);
</script>

<template>
    <div class="title">阿卡大合照</div>
    <van-swipe style="height: 112px" vertical>
        <van-swipe-item v-for="item in groupPhotos" :key="item.id">
            <div class="group-photo-img">
                <img :src="require(`../../../assets/${item.name}.jpg`)" alt="" />
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<style scoped lang="less">
.title {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 8px;
    line-height: 22px;
    display: flex;
    align-items: center;
    gap: 6px;

    &:before {
        content: '';
        width: 3px;
        height: 12px;
        background: var(--van-tabs-bottom-bar-color);
    }
}

.group-photo-img {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
