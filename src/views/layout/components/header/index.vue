<template>
    <div 
        class="w-full bg-white dark:bg-zinc-800 border-b border-b-zinc-200
        dark:border-b-zinc-700 px-2 py-1 duration-500">
        <div class="flex items-center">
            <img
                v-lazy
                class="guide-home h-4 cursor-pointer mr-2 rounded"
                src="../../../../assets/vue.svg"
                @click="onToHome">
            <header-search-vue class="mr-1"></header-search-vue>
            <header-theme-vue class="mr-1"></header-theme-vue>
            <header-my-vue></header-my-vue>
        </div>
    </div>
</template>

<script setup>
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue';
import { useRouter } from 'vue-router'

// Vue2中的this.$router
const router = useRouter()
const onToHome = () => {
    router.push('/')
}
</script>

<style lang="scss" scoped></style>