<template>
    <div class="h-full overflow-auto bg-white dark:bg-zine-800
    duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200
    xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent">
        <navigation-vue />
        <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
            <list-vue></list-vue>
        </div>
    </div>
</template>

<script setup>
import navigationVue from './components/navigation/index.vue'
import listVue from './components/list/index.vue'
</script>

<style lang="scss" scoped>

</style>