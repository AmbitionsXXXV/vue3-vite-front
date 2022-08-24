<template>
    <div>
        <m-waterfall 
            :data="pexelsList"
            nodeKey="id"
            :column="isMobileTerminal ? 2 : 5"
            :picturePreReading="false"
            class="w-full px-1"
            >
            <template v-slot="{ item, width}">
                <item-vue :data="item" :width="width"></item-vue>
            </template>
        </m-waterfall>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getPexelsList } from '@/api/pexels'
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible'

/**
 * 构建数据请求
 */
let query = {
    page: 1,
    size: 20
}
const pexelsList = ref([])
const getPexelsData = async () => {
    const res = await getPexelsList(query)
    pexelsList.value = res.list
}
getPexelsData()
</script>
