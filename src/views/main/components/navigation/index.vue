<template>
    <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import { getCategory } from '@/api/category'
import { ref } from 'vue'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categoryData = ref([])
const getCategoryData = async () => {
    const { categorys } = await getCategory()
    categoryData.value = categorys
    categoryData.value.unshift(ALL_CATEGORY_ITEM)
}
getCategoryData()
</script>


<style lang="scss" scoped>

</style>