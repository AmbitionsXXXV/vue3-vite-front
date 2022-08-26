<template>
    <m-popover placement="top-left">
        <!-- 具名插槽:触发弹层的视图 -->
        <template #reference>
            <m-svg-icon
                :name="svgIconName"
                class="guide-theme w-4 h-4 p-1 cursor-pointer rounded-sm
                duration-200 outline-none hover:bg-zinc-100/60
                dark:hover:bg-zinc-900"
                fillClass="fill-zinc-900 dark:fill-zinc-300"
            ></m-svg-icon>
        </template>

        <!-- 匿名插槽:弹出层视图中展示的内容 -->
        <div class="w-[140px] overflow-hidden">
            <div
                class="flex items-center p-1 cursor-pointer rounded
                hover:bg-teal-100/60 dark:hover:bg-zinc-800"
                v-for="item in themeArr"
                :key="item.id"
                @click="onItemClick(item)"
            >
                <m-svg-icon
                    :name="item.icon"
                    class="w-1.5 h-1.5 mr-1"
                    fillClass="fill-zinc-900 dark:fill-zinc-300"
                ></m-svg-icon>
                <span class="text-zinc-800 text-sm dark:text-zinc-300">{{ item.name }}</span>
            </div>
        </div>
    </m-popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'
import { useStore } from 'vuex'
import { computed } from 'vue'

// 控制图标展示
const store = useStore()

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

// 1.监听主题的切换行为
// 2.更具行为保存当前需要展示的主题到vuex中
// 3.根据 vuex 中保存的当前主题，展示 header-theme 下的显示图标
// 4.根据 vuex 中保存的当前主题，修改 html 的 class
/**
 * menu 切换事件
 * @param {*} theme
 */
const onItemClick = (theme) => {
    store.commit('theme/changeThemeType', theme.type)
}

const svgIconName = computed(() => {
    // 根据当前的 themeType 返回当前的选中 icon
    const findTheme = themeArr.find((theme) => {
        return theme.type === store.getters.themeType
    })
    return findTheme?.icon || THEME_LIGHT
})
</script>
