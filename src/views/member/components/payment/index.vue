<template>
    <div>
        <!-- PC 端支付 -->
        <pc-payment-vue v-if="!isMobileTerminal"></pc-payment-vue>
        <!-- 移动端支付 -->
        <mobile-payment-vue v-else></mobile-payment-vue>
    </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import pcPaymentVue from './pc-payment/index.vue'
import mobilePaymentVue from './mobile-payment/index.vue'
</script>
