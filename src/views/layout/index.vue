<template>
    <div class="h-screen">
        <header-vue class="h-header"></header-vue>
        <main-vue class="h-main"></main-vue>
        <floating-vue></floating-vue>
    </div>
</template>

<script setup>
import headerVue from './components/header/index.vue'
import mainVue from './components/main.vue'
import floatingVue from './components/floating.vue'
</script>

<style lang="scss" scoped>

</style>