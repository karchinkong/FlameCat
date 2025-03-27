<script setup lang="ts">
import { ref, Ref } from 'vue';
import { TreeSelectItem } from 'vant';

const akaIndex = ref(0);

const activeNames = ref([]);

const aka: Ref<TreeSelectItem[]> = ref([
    {
        text: '中午组',
        children: [
            { id: 1, text: '啊咋' },
            { id: 1, text: '黑哥' },
            { id: 1, text: '小白' },
            { id: 1, text: '大果' },
            { id: 1, text: '锤子' },
            { id: 1, text: '老王' },
            { id: 1, text: '大鼻涕' },
            { id: 1, text: '萝卜' },
            { id: 1, text: '鸭子' },
            { id: 1, text: '前年' }
        ]
    },
    {
        text: '晚上1组',
        children: [
            { id: 1, text: 'P神' },
            { id: 1, text: '笑哥' },
            { id: 1, text: '小只' },
            { id: 1, text: '之隽' },
            { id: 1, text: '战哥' },
            { id: 1, text: '大姐' },
            { id: 1, text: '又伊' },
            { id: 1, text: '乌龙茶' },
            { id: 1, text: '瑾瑟' },
            { id: 1, text: '鞋' }
        ]
    },
    {
        text: '晚上2组',
        children: [
            { id: 1, text: '噗噗' },
            { id: 1, text: '雄哥' },
            { id: 1, text: '布布' },
            { id: 1, text: '苏沐菲' },
            { id: 1, text: '下雪' },
            { id: 1, text: '云中' },
            { id: 1, text: '晚枫' },
            { id: 1, text: '地狱猫' },
            { id: 1, text: '老司机' },
            { id: 1, text: '替补' }
        ]
    },
    { text: '晚上3组' }
]);
</script>

<template>
    <van-collapse v-model="activeNames">
        <van-collapse-item class="aka" title="阿卡伊勒" name="1">
            <van-tree-select v-model:main-active-index="akaIndex" :items="aka" />
        </van-collapse-item>
    </van-collapse>
</template>

<style scoped lang="less">
.aka {
    :deep(.van-collapse-item__content) {
        padding: 0 !important;
    }
}
</style>
