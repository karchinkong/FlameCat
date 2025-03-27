<script setup lang="ts">
import { ref } from 'vue';
import GroupPhoto from './components/GroupPhoto';
import BossArrange from './components/BossArrange';

const active = ref();
</script>

<template>
    <div class="home">
        <van-tabs v-model:active="active">
            <van-tab title="公会介绍">
                <div class="production">
                    <van-empty image="error" description="暂无介绍" />
                </div>
            </van-tab>
            <van-tab title="副本安排">
                <BossArrange />
            </van-tab>
            <van-tab title="公会合照">
                <div class="group-photo">
                    <GroupPhoto />
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<style scoped lang="less">
.home {
    width: 100%;
    height: 100%;

    .production {
        padding-top: 100px;
    }

    .group-photo {
        width: 100%;
        height: 100%;
        padding: 12px;
        box-sizing: border-box;
    }
}
</style>
