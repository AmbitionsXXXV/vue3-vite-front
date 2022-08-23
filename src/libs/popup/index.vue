<template>
    <div class="">
        <!-- teleport -->
        <teleport to="body">
        <!-- 蒙版 -->
        <transition name="fade">
            <div
            v-if="isOpen"
            class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
            @click="isOpen = false"
            ></div>
        </transition>
        <!-- 内容 -->
        <transition name="popup-down-up">
            <div
            v-if="isOpen"
            v-bind="$attrs"
            class="w-screen bg-white dark:bg-zinc-800 z-50 fixed bottom-0"
            >
            <slot />
            </div>
        </transition>
        </teleport>
    </div>
</template>

<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'
const props = defineProps({
    modelValue: {
        required: true,
        type: Boolean
    }
})

// 提供响应式后不需要主动触发了
const emits = defineEmits(['update:modelValue'])

// 是一个响应式数据，当 isOpen 的值发生变化时，会自动触发 emit 修改 modelValue
const isOpen = useVModel(props)

// ------ 滚动锁定 ------
const isLocked = useScrollLock(document.body)
watch(
    () => isOpen,
    val => {
        isLocked.value = val
    },
    {
        immediate: true
    }
)
</script>

<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
    transition: all 0.3s;
}

.fade-leave-active {
    transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
// popup-down-up 展示动画
.popup-down-up-enter-active {
    transition: all 0.3s;
}

.popup-down-up-leave-active {
    transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
    transform: translateY(100%);
}
</style>

