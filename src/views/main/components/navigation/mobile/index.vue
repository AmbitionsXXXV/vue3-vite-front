<template>
    <div class="bg-white sticky top-0 left-0 z-10">
        <ul
            class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
            ref="ulTarget"
        >   

            <!-- 滑块 -->
            <li
                ref="sliderTarget"
                :style="sliderStyle"
                class="absolute h-[22px] bg-zinc-900 rounded-lg
                duration-200"></li>

            <!-- 汉堡按钮 -->
            <li
                class="z-20 fixed top-0 right-[-1px] h-4
                px-1 flex items-center bg-white shadow-l-white"
                @click="onShowPopup"
                >
                <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
            </li>

            <!-- category items -->
            <li
                v-for="(item, index) in data"
                :key="item.id"
                class="shrink-0 px-1.5 py-0.5 z-10
                duration-200 last:mr-4"
                :class="{
                'text-zinc-100 ': currentCategoryIndex === index
                }"
                :ref="setItemRef"
                @click="onItemClick(index)"
            >
                {{ item.name }}
            </li>
        </ul>
        <m-popup v-model="isVisible">
            <menu-vue :categorys="data" @onItemClick="onItemClick"></menu-vue>
        </m-popup>
    </div>
</template>


<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'

// vite 构建的项目中，可以直接使用defineProps 方法
defineProps({
    data: {
        type: Array,
        required: true
    }
})

// 滑块
const sliderStyle = ref({
    transform: 'translateX(0px)',
    width: '52px '
})

// 选中item下标
const currentCategoryIndex = ref(0)

// 获取所有的item元素
let itemRefs = []
const setItemRef = (el) => {
    if(el){
        itemRefs.push(el)
    }
}
// 数据改变之后，DOM变化之前
onBeforeUpdate(() => {
    itemRefs = []
})

// 获取 ul元素
const ulTarget = ref(null)
// 通过vueuse -> useScroll 获取响应式的scroll 滚动距离
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
    // 获取选中元素的 left、width
    const { left, width } = itemRefs[val].getBoundingClientRect()
    // 为 sliderStyle 设置属性
    sliderStyle.value = {
        // ul 横向滚动位置 + 当前元素的 left 偏移量
        transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
        width: width + 'px'
    }
})
// item 点击事件
const onItemClick = (index) => {
    currentCategoryIndex.value = index
    isOpenPopup.value = false
}

// 控制popup展示
const isVisible = ref(false)
const onShowPopup = () => {
    isVisible.value = true
}
</script>

<style lang="scss" scoped>

</style>