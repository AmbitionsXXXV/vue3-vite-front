<template>
    <mobile-navigation-vue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import { useStore } from 'vuex'

const store = useStore()
// 触发 category 获取数据
store.dispatch('category/useCategoryData')
</script>


<style lang="scss" scoped>

</style>