<template>
    <div
        class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1"
    >
        <div 
            :style="{
                backgroundColor: randomRGB()
            }"
            class="relative w-full rounded cursor-zoom-in group">
        <!-- :src="data.photo" -->
            <img 
                v-lazy
                class="w-full rounded bg-transparent"
                :src="data.photo"
                :style="{
                    height: (width / data.photoWidth) * data.photoHeight + 'px'
                }"
                />
            <!-- 遮罩层 -->
            <div
                class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0
                rounded duration-300 group-hover:opacity-100 xl:block"
            >
                <m-button 
                    class="absolute top-1.5 left-1.5"
                    >分享</m-button>
                <m-button
                    class="absolute top-1.5 right-1.5"
                    type="info"
                    icon="heart"
                    iconClass="fill-zinc-900 dark:fill-zinc-200"
                    />
                <m-button
                    class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
                    type="info"
                    size="small"
                    icon="download"
                    iconClass="fill-zinc-900 dark:fill-zinc-200"
                    />
                <m-button
                    class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
                    type="info"
                    size="small"
                    icon="full"
                    iconClass="fill-zinc-900 dark:fill-zinc-200"
                    />
            </div>
        </div>
        <!-- 标题 -->
        <p
            class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 line-clamp-2 px-1"
            alt
        >
        {{ data.title }}
        </p>
        <!-- 作者 -->
        <div class="flex items-center mt-1 px-1">
        <img v-lazy class="h-2 w-2 rounded-full" :src="data.avatar" alt="" />
        <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
        </div>
    </div>
</template>

<script setup>
import { randomRGB } from '@/utils/color'

defineProps({
    data: {
        type: Object,
        required: true
    },
    width: {
        type: Number,
        default: 0
    }
})
</script>

