<template>
    <div
        class="relative"
        @mouseleave="onMouseleave"
        @mouseenter="onMouseenter"
        >
        <div>
            <!-- 具名插槽:触发弹层的视图 -->
            <slot name="reference" />
        </div>
        <!-- 气泡展示动画 -->
        <transition name="slide">
            <div
                v-show="isVisible"
                class="absolute p-1 z-20 bg-white border rounded-md"
            >
                <!-- 匿名插槽:弹出层视图中展示的内容 -->
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 控制 menu 展示
const isVisible = ref(false)

/**
 * 鼠标移入的触发行为
 */
const onMouseenter = () => {
    isVisible.value = true
}
/**
 * 鼠标移出的触发行为
 */
const onMouseleave = () => {
    isVisible.value = false
}
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

