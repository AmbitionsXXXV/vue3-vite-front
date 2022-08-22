<template>
    <div
        class="relative"
        @mouseleave="onMouseleave"
        @mouseenter="onMouseenter"
        >
        <div ref="referenceTarget">
            <!-- 具名插槽:触发弹层的视图 -->
            <slot name="reference" />
        </div>
        <!-- 气泡展示动画 -->
        <transition name="slide">
            <div
                ref="contentTarget"
                v-show="isVisible"
                class="absolute p-1 z-20 bg-white border rounded-md"
                :style="contentStyle"
            >
                <!-- 匿名插槽:弹出层视图中展示的内容 -->
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
// 延迟关闭时长(ms)
const DELAY_TIME = 120
// 左上
const PROP_TOP_LEFT = 'top-left'
// 右上
const PROP_TOP_RIGHT = 'top-right'
// 左下
const PROP_BOTTOM_LEFT = 'bottom-left'
// 右下
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 定义指定位置的 Enum
const placementEnum = [
    PROP_TOP_LEFT,
    PROP_TOP_RIGHT,
    PROP_BOTTOM_LEFT,
    PROP_BOTTOM_RIGHT
]
</script>

<script setup>
/**
 * 1.指定所有可选位置的常量，并生成enum
 * 2.通过porp控制指定位置
 * 3.获取元素的 DOM，创建读取元素尺寸的方法
 * 4.生成旗袍的样式对象，用来控制每个位置对应的样式
 * 5.根据prop，计算样式对象
 */
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
    // 控制气泡弹出位置,错误时给出提示
    placement: {
        type: String,
        default: PROP_BOTTOM_LEFT,
        validator(val) {
            const result = placementEnum.includes(val)
            if (!result) {
                throw new Error(
                    `你的 placement 必须是 ${placementEnum.join('、')} 中的一个`
                )
            }
            return result
        }
    }
})

// 控制 menu 展示
const isVisible = ref(false)

// 控制延迟关闭
let timeout = null

/**
 * 鼠标移入的触发行为
 */
const onMouseenter = () => {
    isVisible.value = true
    // 再次触发时，清理延时装置
    if (timeout) {
        clearTimeout(timeout)
    }
}
/**
 * 鼠标移出的触发行为
 */
const onMouseleave = () => {
    // 延时装置
    timeout = setTimeout(() => {
        isVisible.value = false
        timeout = null
    }, DELAY_TIME)
}

/**
 * 计算元素尺寸
 */
const referenceTarget = ref(null)
const contentTarget = ref(null)
const useElementSize = (target) => {
    if (!target) return {}
    return {
        width: target.offsetWidth,
        height: target.offsetHeight
    }
}

/**
 * 气泡样式
 */
const contentStyle = ref({
    top: 0,
    left: 0
})

// 计算：气泡展示的时候再进行计算
watch(isVisible, (val) => {
    if(!val) return
    // 等待元素渲染
    // Vue在数据改变之后，要等待一段时间 DOM 才会发生变化,所以可以通过 nextTick 
    // 函数的参数，来监听 DOM 变化之后的回调
    nextTick(() => {
        switch(props.placement) {
            // 左上
            case PROP_TOP_LEFT:
                contentStyle.value.top = 0
                contentStyle.value.left =
                -useElementSize(contentTarget.value).width + 'px'
            break
            // 右上
            case PROP_TOP_RIGHT:
                contentStyle.value.top = 0
                contentStyle.value.left =
                useElementSize(referenceTarget.value).width + 'px'
            break
            // 左下
            case PROP_BOTTOM_LEFT:
                contentStyle.value.top =
                useElementSize(referenceTarget.value).height + 'px'
                contentStyle.value.left =
                -useElementSize(contentTarget.value).width + 'px'
            break
            // 右下
            case PROP_BOTTOM_RIGHT:
                contentStyle.value.top =
                useElementSize(referenceTarget.value).height + 'px'
                contentStyle.value.left =
                useElementSize(referenceTarget.value).width + 'px'
            break
        }
    })
})
</script>

<style lang="scss" scoped>
// slide 展示动画
.slide-enter-active {
    transition: opacity 0.3s, transform 0.3s;
}

.slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>

