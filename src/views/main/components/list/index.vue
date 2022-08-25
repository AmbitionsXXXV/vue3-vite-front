<template>
    <div>
        <!-- 长列表处理 -->
        <m-infinite
            v-model="isLoading"
            :isFinished="isFinished"
            @onLoad="getPexelsData"
            >
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
        </m-infinite>
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
// 数据是否在加载中
const isLoading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)
//  数据源
const pexelsList = ref([])
/**
 * 加载数据的方法
 */
const getPexelsData = async () => {
    // 数据全部加载完成则 return
    if (isFinished.value) {
        return
    }

    // 完成第一次请求之后，后续请求让 page 自增
    if (pexelsList.value.length) {
        query.page += 1
    }

    // 触发接口请求
    const res = await getPexelsList(query)
    // 初始请求清空数据源
    if (query.page === 1) {
        pexelsList.value = res.list
    } else {
        pexelsList.value.push(...res.list)
    }
    // 判断数据是否全部加载完成
    if (pexelsList.value.length === res.total) {
        isFinished.value = true
    }
    // 修改 loading 标记
    isLoading.value = false
}
getPexelsData()
</script>
