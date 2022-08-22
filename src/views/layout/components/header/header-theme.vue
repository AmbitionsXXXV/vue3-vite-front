<template>
    <m-popover placement="top-left">
        <!-- 具名插槽:触发弹层的视图 -->
        <template #reference>
            <m-svg-icon
                name="theme-light"
                class="guide-theme w-4 h-4 p-1 cursor-pointer rounded-sm
                duration-200 outline-none hover:bg-zinc-100/60"
                fillClass="fill-zinc-900"
            ></m-svg-icon>
        </template>

        <!-- 匿名插槽:弹出层视图中展示的内容 -->
        <div class="w-[140px] overflow-hidden">
            <div
                class="flex items-center p-1 cursor-pointer rounded
                hover:bg-teal-100/60"
                v-for="item in themeArr"
                :key="item.id"
            >
                <m-svg-icon
                :name="item.icon"
                class="w-1.5 h-1.5 mr-1"
                fillClass="fill-zinc-900"
                ></m-svg-icon>
                <span class="text-zinc-800 text-sm">{{ item.name }}</span>
            </div>
        </div>
    </m-popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'

// 构建渲染数据源
const themeArr = [
    {
        id: '0',
        type: THEME_LIGHT,
        icon: 'theme-light',
        name: '极简白'
    },
    {
        id: '1',
        type: THEME_DARK,
        icon: 'theme-dark',
        name: '极夜黑'
    },
    {
        id: '2',
        type: THEME_SYSTEM,
        icon: 'theme-system',
        name: '跟随系统'
    }
]
</script>
