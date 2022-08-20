<template>
    <div class="bg-white sticky top-0 left-0 z-10">
        <ul
        class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
        >
            <!-- 汉堡按钮 -->
            <li
            class="z-20 fixed top-0 right-[-1px] h-4
            px-1 flex items-center bg-white shadow-l-white"
            >
            <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
            </li>

            <!-- category item -->
            <li
                v-for="item in data"
                :key="item.id"
                class="shrink-0 px-1.5 py-0.5 z-10
                duration-200 last:mr-4"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>


<script setup>
// vite 构建的项目中，可以直接使用defineProps 方法
defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>