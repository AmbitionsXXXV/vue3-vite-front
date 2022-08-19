<template>
  <!-- 一级路由出口 -->
  <router-view></router-view>
</template>

<script setup>
import { isMobileTerminal } from './utils/flexible';
</script>